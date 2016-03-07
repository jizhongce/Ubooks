import {readDocument} from './database.js';

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

export function getExchangebook(user, cb) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.exchange = feedData.contents.map(getFeedItemSync);
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
