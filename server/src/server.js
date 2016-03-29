// Implement your server in this file.
// We should be able to run your server with node src/server.js
//Import the databse so that we can use the function in the database
var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
//Import the Schema for post
var bookitemSchema = require('./schemas/bookitem.json');
//Import the Schema for comment
var commentSchema = require('./schemas/comment.json');
// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//end

app.use(express.static('../client/build'));

/**
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

//Functions start from here



app.listen(3000, function() {
   console.log('Example app listening on port 3000!');
});
