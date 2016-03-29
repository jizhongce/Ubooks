// Your startup's initial mock objects go here
var initialData = {
  "users": {
      "1": {
        "_id": 1,
        "fullName": "Tim",
        "exchangeLists": [],
        "wantLists": [2],
        "feed":1,
        "pic":"../img/person1.png",
        "mailbox":[],
        "historys": []
      },
      "2": {
        "_id": 2,
        "fullName": "Kai",
        "exchangeLists": [1],
        "wantLists": [],
        "feed":1,
        "pic":"../img/person2.png",
        "mailbox":[],
        "historys": []
      },
      "3": {
        "_id": 3,
        "fullName": "Leo",
        "exchangeLists": [2],
        "wantLists": [],
        "feed":1,
        "pic":"../img/person2.png",
        "mailbox":[],
        "historys": []
      },
      //this is you
      "4": {
        "_id": 4,
        "fullName": "Carter",
        "exchangeLists": [3,4],
        "wantLists": [2,1],
        "feed":1,
        "pic":"../img/Carter.jpg",
        "mailbox":[4],
        "historys": []
      }
    },
    //books
    "booksItems": {
      "1": {
        "_id":1,
        "owner_id":2,
        "subject": 1,
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
                "author": 1,
                // The contents of the comment.
                "contents": "I love this book!",
                // The date the comment was posted.
                // 01/24/16 22:00 EST
                "postDate": 1451973470000
            }
        ]
      },

      "2": {
        "_id":2,
        "owner_id":3,
        "subject": 1,
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
                "author": 2,
                // The contents of the comment.
                "contents": "book is good!",
                // The date the comment was posted.
                // 01/24/16 22:00 EST
                "postDate": 1453690800000
            }

        ]
      },
      "3": {
        "_id":3,
        "owner_id":4,
        "subject": 2,
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
                "author": 1,
                // The contents of the comment.
                "contents": "Great book!",
                // The date the comment was posted.
                // 01/24/16 22:00 EST
                "postDate": 1451973470000
            }
        ]
      },
      "4": {
        "_id":4,
        "owner_id":3,
        "subject": 3,
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
                "author": 2,
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
        "_id": 1,
        // Listing of FeedItems in the feed.
        "contents": [1,2,3,4]
      }
    },

    "mailbox":{
      "4": {
        "_id": 4,
        "participants": [3,4],
        // Listing of messages in the mailbox.
        "Messages": [
          {
            "From": 3,
            "sendDate": 1453690800000,
            "contents": "hello"
          },
          {
            "From": 4,
            "sendDate": 1453690800000,
            "contents": "hey"
          }
        ]
      },
      "3": {
        "_id": 3,
        "participants": [2,4],
        "Messages": [
          {
            "From": 4,
            "sendDate": 1453690800000,
            "contents": "I want this book!"
          }
        ]
      },
      "2": {
        "_id": 2,
        "Messages": [
          {
            "From": 3,
            "sendDate": 1453690800000,
            "contents": "Yeah check thi out!"
          }
        ]
      },
      "1": {
        "_id": 1,
        "Messages": [
          {
            "From": 2,
            "sendDate": 1453690800000,
            "contents": "I want this book! hahahahaha"
          }
        ]
      }
    }
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
