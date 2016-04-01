var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var getCollection = database.getCollection;
//import the body parser
var bodyParser = require('body-parser');
var validate = require('express-jsonschema').validate;
//import the schemas
var commentSchema = require('./schemas/comment.json');
var bookitemSchema = require('./schemas/bookitem.json');
// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//end
// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());

app.use(express.static('../client/build'));

function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('booksItems', feedItemId);
  feedItem.owner_id = readDocument('users',feedItem.owner_id);
  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
  });
  return feedItem;
}

function getFeedData() {
  var feedData = readDocument('feeds', 1);
  feedData.contents = feedData.contents.map(getFeedItemSync);
  return feedData;
}

app.get('/feed',function(req,res){
    res.send(getFeedData());
});

app.get('/user/:userid',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNum = parseInt(userid,10);

  var isUser = (fromUser === useridNum);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    var userData = readDocument('users',useridNum);
    res.send(userData);
  }else{
    res.status(401).end();
  }
});

app.get('/user/:userid/exchangebooks',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNum = parseInt(userid,10);

  var isUser = (fromUser === useridNum);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    var user = readDocument('users',useridNum);
    res.send(user.exchangeLists.map((bookid)=>getFeedItemSync(bookid)));
  }else{
    res.status(401).end()
  }
});

app.get('/user/:userid/needbooks',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNum = parseInt(userid,10);

  var isUser = (fromUser === useridNum);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    var user = readDocument('users',useridNum);
    res.send(user.wantLists.map((bookid)=>getFeedItemSync(bookid)));
  }else{
    res.status(401).end()
  }
});


app.get('/user/:userid/mailbox',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNum = parseInt(userid,10);

  var isUser = (fromUser === useridNum);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    var user = readDocument('users',useridNum);
    res.send(user.mailbox.map((mailNum)=>readDocument('mailbox',mailNum)));
  }else{
    res.status(401).end()
  }
});
//Functions start from here
function getUserIdFromToken(authorizationLine) {
  try {
    var token = authorizationLine.slice(7);
    var regularString = new Buffer(token, 'base64').toString('utf8');
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

//Tim's function goes from here
app.get('/book/:bookid',function(req,res){
  var bookid = parseInt(req.params.bookid, 10);
  res.send(getFeedItemSync(bookid));
});

//Use PUT for posting comment
app.put('/bookitem/:bookitemid/commentthread/comment',validate({ body: commentSchema }) ,function(req, res) {
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var body = req.body;
  var bookitemId = parseInt(req.params.bookitemid, 10);
  var bookItem = readDocument('booksItems', bookitemId);
  if(fromUser === body.author){
    bookItem.comments.push({
    "author": body.author,
    "contents": body.contents,
    "postDate": new Date().getTime()
  });
  writeDocument('booksItems', bookItem);
  res.send(getFeedItemSync(bookitemId));}
  else{
    res.status(401).end();
  }
});

app.post('/bookitem/',validate({ body: bookitemSchema}), function(req, res){
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var body = req.body;
  if (body.owner_id == fromUser) {
    var time = new Date().getTime();
    var newBookItem={
      "owner_id": body.owner_id,
      "pic": body.pic,
      "bookname": body.bookname,
      "author": body.author,
      "edition": body.edition,
      "isbn_10": body.isbn_10,
      "isbn_13": body.isbn_13,
      "postDate": time,
      "Publisher": body.publisher,
      "publish_date": body.publish_date,
      "list_price": body.list_price,
      "condition": body.condition,
      "highlight": body.highlight,
      "notes": body.notes,
      "description": body.description,
      "location": body.location,
      "comments": []
};
    newBookItem = addDocument('booksItems',newBookItem);
    var userData = readDocument('users', body.owner_id);
    var feedData = readDocument('feeds', userData.feed);
    feedData.contents.push(newBookItem._id);
    userData.exchangeLists.push(newBookItem._id);
    writeDocument('feeds',feedData);
    writeDocument('users',userData);
    res.send();
  } else {
    res.status(401).end();
  }
});

//Tim's function ends here

//Leo's http function start here
//add watch history
function addHistoryBook(bookid,userid){
  var userData = readDocument('users', userid);
  var add = true;
  for (var i = 0; i < userData.historys.length; i++) {
    if(userData.historys[i] === bookid)
      add = false;
    }
  if(add){
    if(userData.historys.length > 2){
      userData.historys.splice(0, 1);
    }
    userData.historys.push(bookid);
  }
  writeDocument('users', userData);
}

//updata watch history
app.put('/user/:userid/historys/:bookid', function(req, res) {
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var userId = parseInt(req.params.userid, 10);
  var bookId = parseInt(req.params.bookid, 10);
  if (fromUser === userId) {
    addHistoryBook(bookId, userId);
    res.send();
  } else {
    res.status(401).end();
  }
});

//get histroys
app.get('/user/:userid/historys',function(req,res){
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var userId = parseInt(req.params.userid, 10);
  var userData = readDocument('users', userId);
  userData.historys = userData.historys.map((history)=> readDocument('booksItems', history) );
  if (fromUser === userId) {
    res.send(userData.historys);
  } else {
    res.status(401).end();
  }
});

//get books collection
app.get('/bookscollcetion',function(req,res){
  var collection = getCollection('booksItems');
  var bookarray = [];
  for(var i = 1; collection[i]; i++){
    bookarray.push(getFeedItemSync(collection[i]._id));
  }
  res.send(bookarray);
});


//Leo's http runction end here




app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  database.resetDatabase();
  res.send();
});



/**
......................Add all function before this line .........................................................
 * Translate JSON Schema Validation failures into error 400s.
 */
app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    // Set a bad request http response status
    res.status(400).end();
  } else {
    // It's some other sort of error; pass it to next error middleware handler
    next(err);
  }
});



app.listen(3000, function() {
   console.log('Example app listening on port 3000!');
});
