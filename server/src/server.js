var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
//import the body parser
var bodyParser = require('body-parser');
var validate = require('express-jsonschema').validate;
//import the schemas
var commentSchema = require('./schemas/comment.json');
var bookitemSchema = require('./schemas/bookitem.json');
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/ubooks';
// Imports the express Node module.
var express = require('express');
var ResetDatabase = require('./resetdatabase');
// Creates an Express server.
var app = express();
MongoClient.connect(url, function(err, db) {
//end
// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());
app.use(express.static('../client/build'));
app.use('/mongo_express',mongo_express(mongo_express_config));


function resolveUserObjects(userList,callback){
  if(userList.length===0){
    callback(null,{});
  }else{
    var query = {
      $or:userList.map((id)=>{return {_id:id}})
    };
    db.collection('users').find(query).toArray(function(err,users){
      if(err){
        return callback(err);
      }
      var userMap = {};
      users.forEach((user)=>{
        userMap[user._id]=user;
      });
      callback(null,userMap);
    });
  }
}

function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }

function getFeedItem(feedItemId,callback){
  db.collection('bookItems').findOne({
    _id:feedItemId
  },function(err,feedItem){
    if(err){
      return callback(err);
    }else if(feedItem === null){
      return callback(null,null);
    }

    var userList = [feedItem.owner_id];
    feedItem.comments.forEach((comment)=>userList.push(comment.author));

    resolveUserObjects(userList,function(err,userMap){
      if(err){
        return callback(err);
      }
      feedItem.owner_id = userMap[feedItem.owner_id];
      feedItem.comments.forEach((comment)=>{
        comment.author=userMap[comment.author];
      });
      callback(null,feedItem);
    });
  });
}

function getFeedData(user,callback){
  db.collection('users').findOne({
    _id:user
  },function(err,userData){
    if(err){
      return callback(err);
    }else if(userData === null){
      return callback(null,null);
    }

    db.collection('feeds').findOne({
      _id:userData.feed
    },function(err,feedData){
      if(err){
        return callback(err);
      }else if (feedData===null){
        return callback(null,null);
      }
      var resolvedContents = [];

      function processNextFeedItem(i){
        getFeedItem(feedData.contents[i],function(err,feedItem){
          if(err){
            callback(err);
          }else{
            resolvedContents.push(feedItem);
            if(resolvedContents.length===feedData.contents.length){
              feedData.contents = resolvedContents;
              callback(null,feedData);
            }else{
              processNextFeedItem(i+1);
            }
          }
        });
      }

      if(feedData.contents.length===0){
        callback(null,feedData);
      }else{
        processNextFeedItem(0);
      }
    });
  });
}

app.get('/feed/:userId',function(req,res){
  var userId = req.params.userId;
    res.send(getFeedData(userId));
});

app.get('/user/:userid',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));

  var isUser = (fromUser === userid);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    // var userData = readDocument('users',userid);
    // res.send(userData);
    db.collection('users').findOne({_id:userid},function(err,userObj){
      if(err){
        return sendDatabaseError(res,err);
      }else if(userObj===null){
        res.status(400).send("Could not find this user "+userid);
      }else{
      res.send(userObj);
    }
  });
  }else{
    res.status(401).end();
  }
});

app.get('/user/:userid/exchangebooks',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));

  var isUser = (fromUser === userid);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    // var user = readDocument('users',userid);
    // res.send(user.exchangeLists.map((bookid)=>getFeedItemSync(bookid)));
db.collection('users').findOne({_id:userid},function(err,userObj){
  if(err){
    return sendDatabaseError(res,err);
  }else if (userObj===null){
      res.status(400).send("Could not find this user "+userid);
  }else{
    res.send(userObj.exchangeLists.map((bookid)=>getFeedItem(bookid,function(err,bookItem){
      if(err){
        return sendDatabaseError(res,err);
      }
      return bookItem;
    })
  ));
  }
});
  }else{
    res.status(401).end()
  }
});

app.get('/user/:userid/needbooks',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));

  var isUser = (fromUser === userid);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    db.collection('users').findOne({_id:userid},function(err,userObj){
      if(err){
        return sendDatabaseError(res,err);
      }else if (userObj===null){
          res.status(400).send("Could not find this user "+userid);
      }else{
        res.send(userObj.wantLists.map((bookid)=>getFeedItem(bookid,function(err,bookItem){
          if(err){
            return sendDatabaseError(res,err);
          }
          return bookItem;
        })
      ));
      }
    });
      }else{
        res.status(401).end()
      }
    });


    function getMailItem(mailId,callback){
      db.collection('mailbox').findOne({
        _id:mailId
      },function(err,mailItem){
        if(err){
          return callback(err);
        }else if(mailItem === null){
          return callback(null,null);
        }else{
          return callback(null,mailItem);
        }
      });
    }

app.get('/user/:userid/mailbox',function(req,res){
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));

  var isUser = (fromUser === userid);
  var morkupIsUser = true;

  if(morkupIsUser||isUser)
  {
    // var user = readDocument('users',userid);
    // res.send(user.mailbox.map((mailNum)=>readDocument('mailbox',mailNum)));
    db.collection('users').findOne({_id:userid},function(err,userObj){
      if(err){
        return sendDatabaseError(res,err);
      }else if (userObj===null){
          res.status(400).send("Could not find this user "+userid);
      }else{
        res.send(userObj.mailbox.map((mailid)=>getMailItem(mailid,function(err,mailItem){
          if(err){
            return sendDatabaseError(res,err);
          }
          return mailItem;
        })
      ));
      }
    });
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
    if (typeof id === 'string') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return "";
    }
  } catch (e) {
    // Return an invalid ID.
    return "";
  }
}

//Tim's function goes from here
app.get('/book/:bookid',function(req,res){
  var bookid = new ObjectID(req.params.bookid);
  db.collection('booksItems').findOne({_id:bookid},function(err,bookdata){
    if (err) {
      return sendDatabaseError(res,err);
    }
    else {
      simpleresloveallusers(function(err,userMap){
        if (err) {
          return sendDatabaseError(res, err);
        }
          bookdata.owner_id = userMap[bookdata.owner_id];
          bookdata.comments.forEach((comment)=>{comment.author = userMap[comment.author]});
          res.send(bookdata);
      });
    }
  });
});

//Use PUT for posting comment
app.put('/bookitem/:bookitemid/commentthread/comment',validate({ body: commentSchema }) ,function(req, res) {
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var comment = req.body;
  var bookitemId = new ObjectID(req.params.bookitemid);
  if(fromUser === req.body.author){
    db.collection('booksItems').updateOne({_id:bookitemId},
      { $push: {comments: comment}},
      function(err){
        if (err) {
          return sendDatabaseError(res,err);
        }
        db.collection('booksItems').findOne({_id:bookitemId},function(err,bookdata){
            if (err) {
              return sendDatabaseError(res,err);
            }
            else {
              simpleresloveallusers(function(err,userMap){
                if (err) {
                  return sendDatabaseError(res, err);
                }
                  bookdata.owner_id = userMap[bookdata.owner_id];
                  bookdata.comments.forEach((comment)=>{comment.author = userMap[comment.author]});
                  res.send(bookdata);
              });
            }
        });

      });
  }
  else{
    res.status(401).end();
  }
});

app.post('/bookitem/',validate({ body: bookitemSchema}), function(req, res){
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var newbook = req.body;
  if (newbook.owner_id == fromUser) {
    var user = new ObjectID(newbook.owner_id);
    db.collection('booksItems').insertOne(newbook,function(err,result){
      if (err) {
        return sendDatabaseError(res,err);
      }
      newbook._id = result.insertedId;
      db.collection('users').updateOne({_id:user},
        {
          $push: {
              exchangeLists: {
                $each: [newbook._id],
                $position: 0
              }
            }
        },
        function(err){
        if (err) {
          return sendDatabaseError(res,err);
        }
        db.collection('users').findOne({_id:user},function(err,userdata){
          if (err) {
            return sendDatabaseError(res,err);
          }
          db.collection('feeds').updateOne({_id:userdata.feed},
            {
              $push: {
                  contents: {
                    $each: [newbook._id],
                    $position: 0
                  }
                }
            },
            function(err){
              if (err) {
                return sendDatabaseError(res,err);
              }
              res.send();
            }
          );
        });
      });
    });
  } else {
    res.status(401).end();
  }
});

//Tim's function ends here

//Leo's http function start here-----------------------------------------------
//updata watch history
app.put('/user/:userid/historys/:bookid', function(req, res) {
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  console.log(fromUser);
  var userId = req.params.userid;
  var bookId = new ObjectID(req.params.bookid);
  if (fromUser === userId) {
    userId = new ObjectID(userId);
    db.collection('users').findOne({_id:userId},function(err,user){
      if (err) {
        return sendDatabaseError(res, err);
      } else if (user === null) {
        return res.status(400).end();
      }
      for(var i=0;i<user.historys.length;i++){
        if(bookId === user.historys[i])
          res.send();
      }
      db.collection('users').updateOne({_id:userId}, {
        $push:{
          historys:{
            $each:[bookId],
            $slice:-3
          }
        }
      },function(err){
        if (err) {
          return sendDatabaseError(res, err);
        }
        res.send();
      });
    });
  } else {
    res.status(401).end();
  }
});

//resolve all booksitems
function simplereslovebooksitems(callback){
  db.collection('booksItems').find({}).toArray(function(err, books) {
    if (err) {
      return callback(err);
    }
    var bookMap = {};
    books.forEach((book) => {
      bookMap[book._id] = book;
    });
    callback(null, bookMap);
  });
}

//resolve all user
function simpleresloveallusers(callback){
  db.collection('users').find({}).toArray(function(err, users) {
    if (err) {
      return callback(err);
    }
    var userMap = {};
    users.forEach((user) => {
      userMap[user._id] = user;
    });
    callback(null, userMap);
  });
}

//get watch histroys
app.get('/user/:userid/historys',function(req,res){
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var userId = req.params.userid;
  if (fromUser === userId) {
    userId = new ObjectID(userId);
    db.collection('users').findOne({_id:userId},function(err,userData){
      if (err) {
        return sendDatabaseError(res, err);
      } else if (userData === null) {
        return res.status(400).end();
      }
      simplereslovebooksitems(function(err,bookMap){
        if (err) {
          return sendDatabaseError(res, err);
        }
        res.send(userData.historys.map((historyid)=>bookMap[historyid]));
      });
    });
  } else {
    res.status(401).end();
  }
});

//get books collection
app.get('/bookscollcetion',function(req,res){
  db.collection('booksItems').find({}).toArray(function(err,bookarray){
    if (err) {
      return sendDatabaseError(res, err);
    }
    simpleresloveallusers(function(err,userMap){
      if (err) {
        return sendDatabaseError(res, err);
      }
      for(var i = 0; i < bookarray.length; i++){
        bookarray[i].owner_id = userMap[bookarray[i].owner_id];
        bookarray[i].comments.forEach((comment)=>{comment.author = userMap[comment.author]});
      }
      res.send(bookarray);
    });
  });
});

//filter
app.get('/bookscollcetion/:searchTerm',function(req,res){
  var mysearch = req.params.searchTerm;
  var reg = new RegExp(mysearch, "i");
  db.collection('booksItems').find({bookname:{$regex:reg}}).toArray(function(err,bookarray){
    simpleresloveallusers(function(err,userMap){
      if (err) {
        return sendDatabaseError(res, err);
      }
      for(var i = 0; i < bookarray.length; i++){
        bookarray[i].owner_id = userMap[bookarray[i].owner_id];
        bookarray[i].comments.forEach((comment)=>{comment.author = userMap[comment.author]});
      }
      res.send(bookarray);
    });
  });
});
//Leo's http runction end here-------------------------------------------------

app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  ResetDatabase(db,function(){
    res.send();
  });
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
});
