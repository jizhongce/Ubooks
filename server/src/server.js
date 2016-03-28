// Implement your server in this file.
// We should be able to run your server with node src/server.js


// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//end



app.use(express.static('../client/build'));


app.listen(3000, function() {
   console.log('Example app listening on port 3000!');
});
