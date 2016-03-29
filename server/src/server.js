// Implement your server in this file.
// We should be able to run your server with node src/server.js
//Import the databse so that we can use the function in the database
var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//end

app.use(express.static('../client/build'));


//Functions start from here



app.listen(3000, function() {
   console.log('Example app listening on port 3000!');
});
