var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
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
