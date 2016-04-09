var ObjectID = require('mongodb').ObjectID;

var databaseName = "ubooks";
// Put the initial mock objects here.
var initialData = {"users": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "fullName": "Tim",
      "exchangeLists": [],
      "wantLists": [new ObjectID("000000000000000000000002")],
      "feed":new ObjectID("000000000000000000000001"),
      "pic":"../img/person1.png",
      "mailbox":[],
      "historys": []
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "fullName": "Kai",
      "exchangeLists": [],
      "wantLists": [new ObjectID("000000000000000000000001")],
      "feed":new ObjectID("000000000000000000000001"),
      "pic":"../img/person2.png",
      "mailbox":[],
      "historys": []
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "fullName": "Leo",
      "exchangeLists": [new ObjectID("000000000000000000000002")],
      "wantLists": [],
      "feed":new ObjectID("000000000000000000000001"),
      "pic":"../img/person2.png",
      "mailbox":[],
      "historys": []
    },
    //this is you
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "fullName": "Carter",
      "exchangeLists": [new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")],
      "wantLists": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000004")],
      "feed":new ObjectID("000000000000000000000001"),
      "pic":"img/Carter.jpg",
      "mailbox":[new ObjectID("000000000000000000000004")],
      "historys": []
    }
  },
  //books
  "booksItems": {
    "1": {
      "_id":new ObjectID("000000000000000000000001"),
      "owner_id":new ObjectID("000000000000000000000002"),
      "pic":"../img/book1.jpg",
      "bookname": "Introduction-to-algorithms",
      "author":"Tomas",
      "edition": "3rd",
      "isbn_10": "0262033844",
      "isbn_13": "9780262033848",
      "postDate": 1453668480000,
      "publisher": "The MIT Press",
      "publish_date": "July 31, 2009",
      "list_price": "$66.32",
      "highlight": "Yes",
      "notes": "No",
      "condition": "Great",
      "descriptions": "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and c.",
      "location": "Amherst, MA",
      "comments": [
          {
              // The author of the comment.
              "author": new ObjectID("000000000000000000000001"),
              // The contents of the comment.
              "contents": "I love this book!",
              // The date the comment was posted.
              // 01/24/16 22:00 EST
              "postDate": 1451973470000
          }
      ]
    },

    "2": {
      "_id":new ObjectID("000000000000000000000002"),
      "owner_id":new ObjectID("000000000000000000000003"),
      "pic":"../img/book2.jpg",
      "bookname":"Artificial Intelligence A Modern Approach",
      "author":"Peter",
      "edition": "3rd",
      "isbn_10": "0262099822",
      "isbn_13": "9780261234567",
      "postDate": 1454961080000,
      "publisher": "The MASS Press",
      "publish_date": "July 31, 1004",
      "list_price": "$80.32",
      "condition": "Great",
      "highlight": "No",
      "notes": "Yes",
      "descriptions": "This book is used for learning some knowledges about AI for the college students.",
      "location": "Amherst, MA",
      "comments": [
          {
              // The author of the comment.
              "author": new ObjectID("000000000000000000000002"),
              // The contents of the comment.
              "contents": "book is good!",
              // The date the comment was posted.
              // 01/24/16 22:00 EST
              "postDate": 1453690800000
          }

      ]
    },
    "3": {
      "_id":new ObjectID("000000000000000000000003"),
      "owner_id":new ObjectID("000000000000000000000004"),
      "pic":"../img/book3.jpg",
      "bookname":"Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
      "author":"Jennifer Niederst Robbins",
      "edition": "4rd",
      "isbn_10": "1449319270",
      "isbn_13": "978-1449319274",
      "postDate": 1443668380000,
      "publisher": "O'Reilly Media",
      "publish_date": "August 24, 2012",
      "list_price": "$31.99",
      "highlight": "Yes",
      "notes": "Yes",
      "condition": "Great",
      "descriptions": "This friendly guide is the perfect place to start. You’ll begin at square one, learning how the Web and web pages work, and then steadily build from there. By the end of the book, you’ll have the skills to create a simple site with multi-column pages that adapt for mobile devices",
      "location": "Amherst, MA",
      "comments": [
          {
              // The author of the comment.
              "author": new ObjectID("000000000000000000000001"),
              // The contents of the comment.
              "contents": "Great book!",
              // The date the comment was posted.
              // 01/24/16 22:00 EST
              "postDate": 1451973470000
          }
      ]
    },
    "4": {
      "_id":new ObjectID("000000000000000000000004"),
      "owner_id":new ObjectID("000000000000000000000003"),
      "pic":"../img/system.jpg",
      "bookname": "Computer Systems (A programmer's Perspective)",
      "author":"Bryant . O'Hallaron",
      "edition": "Second Editon",
      "isbn_10": "0262033844",
      "isbn_13": "9780262033848",
      "postDate": 1453668480000,
      "publisher": "Prentice Hall",
      "publish_date": "September 31, 2010",
      "list_price": "$89.77",
      "highlight": "Yes",
      "notes": "No",
      "condition": "Great",
      "descriptions": "This book introduces the important and enduring concepts that underlie computer systems.( used by CS 230)",
      "location": "Amherst, MA",
      "comments": [
          {
              // The author of the comment.
              "author": new ObjectID("000000000000000000000002"),
              // The contents of the comment.
              "contents": "It covers a lot of materials !",
              // The date the comment was posted.
              // 01/24/16 22:00 EST
              "postDate": 1451973470000
          }
      ]
    }
  },
  "feeds": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      // Listing of FeedItems in the feed.
      "contents": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004")]
    }
  },

  "mailbox":{
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "participants": [new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004")],
      // Listing of messages in the mailbox.
      "Messages": [
        {
          "From": new ObjectID("000000000000000000000003"),
          "sendDate": 1453690800000,
          "contents": "hello"
        },
        {
          "From": new ObjectID("000000000000000000000004"),
          "sendDate": 1453690800000,
          "contents": "hey"
        }
      ]
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "participants": [new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000004")],
      "Messages": [
        {
          "From": new ObjectID("000000000000000000000004"),
          "sendDate": 1453690800000,
          "contents": "I want this book!"
        }
      ]
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "Messages": [
        {
          "From": new ObjectID("000000000000000000000003"),
          "sendDate": 1453690800000,
          "contents": "Yeah check thi out!"
        }
      ]
    },
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "Messages": [
        {
          "From": new ObjectID("000000000000000000000002"),
          "sendDate": 1453690800000,
          "contents": "I want this book! hahahahaha"
        }
      ]
    }
  }};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

function addIndexes(db,cb){
  db.collection('feedItems').createIndex({ "contents.contents": "text" }, null, cb);
}
/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
       addIndexes(db, cb);
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
