import {readDocument,writeDocument,addDocument} from './database.js';




/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('booksItems', feedItemId);
  feedItem.owner_id = readDocument('users',feedItem.owner_id);
  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
  });
  return feedItem;
}

export function getFeedData(user, cb) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents = feedData.contents.map(getFeedItemSync);
  emulateServerReturn(feedData, cb);
}

export function getUserData(user, cb){
  var userData = readDocument('users', user);
  emulateServerReturn(userData, cb);
}

export function postComment(bookitemId, author, contents, cb) {
  // Since a CommentThread is embedded in a FeedItem object,
  // we don't have to resolve it. Read the document,
  // update the embedded object, and then update the
  // document in the database.
  var feedItem = readDocument('booksItems', bookitemId);
  feedItem.comments.push({
    "author": author,
    "contents": contents,
    "postDate": new Date().getTime()
  });
  writeDocument('booksItems', feedItem);
  // Return a resolved version of the feed item so React can
  // render it.
  emulateServerReturn(getFeedItemSync(bookitemId), cb);
}


export function postBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location){
  var time = new Date().getTime();
  var newBookItem={
    "owner_id":owner_id,
    "pic":pic,
    "contents":{
      "bookname":bookname,
      "author":author,
      "edition": edition,
      "isbn_10": isbn_10,
      "isbn_13": isbn_13,
      "postDate": time,
      "Publisher": publisher,
      "publish_date": publish_date,
      "list_price": list_price,
      "condition": condition,
      "highlight": highlight,
      "notes": notes,
      "description": description,
      "location": location
    },
    "comments": []
  };
  newBookItem = addDocument('booksItems',newBookItem);
  var userData = readDocument('users', owner_id);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents.push(newBookItem._id);
  writeDocument('feeds',feedData);
}

export function getExchangebook(user, cb) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.exchange = feedData.exchange.map(getFeedItemSync);
  emulateServerReturn(feedData, cb);
}

export function getNeedbook(user, cb) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.need = feedData.need.map(getFeedItemSync);
  emulateServerReturn(feedData, cb);
}




export function getUserdata(user,cb)
{
  var userData = readDocument('users',user);
  emulateServerReturn(userData,cb);
}

export function getUserbook(bookitem,cb)
{
  var bookData = readDocument('booksItems',bookitem);
  emulateServerReturn(bookData,cb);

}
