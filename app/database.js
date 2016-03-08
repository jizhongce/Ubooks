import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "MorningStar";

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users": {
      "1": {
        "_id": 1,
        "fullName": "Tim",
        "exchangeLists": [],
        "wantLists": [2],
        "feed":1,
        "pic":"../img/person1.png",
        "mailbox":[]
      },
      "2": {
        "_id": 2,
        "fullName": "Kai",
        "exchangeLists": [1],
        "wantLists": [],
        "feed":2,
        "pic":"../img/person2.png",
        "mailbox":[]
      },
      "3": {
        "_id": 3,
        "fullName": "Leo",
        "exchangeLists": [2],
        "wantLists": [],
        "feed":3,
        "pic":"../img/person2.png",
        "mailbox":[]
      },
      //this is you
      "4": {
        "_id": 4,
        "fullName": "Carter",
        "exchangeLists": [3],
        "wantLists": [2],
        "feed":4,
        "pic":"../img/Carter.jpg",
        "mailbox":[3,4]
      }
    },
    //books
    "booksItems": {
      "1": {
        "_id":1,
        "owner_id":2,
        "subject": 1,
        "pic":"../img/book1.jpg",
        "contents":{
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
          "location": "Amherst, MA"
        },
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
        "contents":{
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
          "location": "Amherst, MA"
        },
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
        "contents":{
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
          "location": "Amherst, MA"
        },
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
        "contents":{
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
          "location": "Amherst, MA"
        },
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
      "4": {
        "_id": 4,
        // Listing of FeedItems in the feed.
        "contents": [1,2,3,4],
        "historys": []
      },
      "3": {
        "_id": 3,
        "contents": [],
        "historys": []
      },
      "2": {
        "_id": 2,
        "contents": [],
        "historys": []
      },
      "1": {
        "_id": 1,
        "contents": [],
        "historys": []
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

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
