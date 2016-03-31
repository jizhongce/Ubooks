import {readDocument,writeDocument,addDocument} from './database'
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


export function getFeedData(userid, cb) {
  sendXHR('GET','/feed',undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  });
}

function getMailItemSync(mail) {
  var mailItem = readDocument('mailbox', mail);
  mailItem.participants = mailItem.participants.map((participant) => readDocument('users', participant));
  return mailItem;
}

export function getMailboxData(user, cb) {
  var userData = readDocument('users', user);
  userData.mailbox = userData.mailbox.map(getMailItemSync);
  emulateServerReturn(userData, cb);
}

export function getMailData(id, cb) {
  var mailData = readDocument('mailbox', id);
  mailData.Messages.forEach((msg) => {
    msg.From = readDocument('users', msg.From);
  });
  emulateServerReturn(mailData, cb);
}

export function getUserData(user, cb){
sendXHR('GET','/user/'+user,undefined,(xhr)=>{
  cb(JSON.parse(xhr.responseText));
});
}


export function replyMail(mailId, user, content, cb) {
  var mailItem = readDocument('mailbox', mailId);
  mailItem.Messages.push({
    "From": user,
    "sendDate": new Date().getTime(),
    "contents": content
  });
  writeDocument('mailbox', mailItem);
  emulateServerReturn(getMailItemSync(mailId), cb);
}

export function postBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location){
  var time = new Date().getTime();
  var newBookItem={
    "owner_id":owner_id,
    "pic":pic,
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
    "location": location,
    "comments": []
  };
  newBookItem = addDocument('booksItems',newBookItem);
  var userData = readDocument('users', owner_id);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents.push(newBookItem._id);
  userData.exchangeLists.push(newBookItem._id);
  writeDocument('feeds',feedData);
  writeDocument('users',userData);
}

export function getExchangebook(user, cb) {
sendXHR('GET','/user/'+user+'/exchangebooks',undefined,(xhr)=>{
  cb(JSON.parse(xhr.responseText));
});
}

export function getNeedbook(user, cb) {
  sendXHR('GET','/user/'+user+'/needbooks',undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  });
}

export function getMail(user, cb) {
  sendXHR('GET','/user/'+user+'/mailbox',undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  });
}

export function getUserdata(user,cb)
{
  var userData = readDocument('users',user);
  emulateServerReturn(userData,cb);
}


export function checkbook(Refs,book)
{
  var bookData = getFeedItemSync(book);
  if(bookData.subject == Refs){
    return bookData;
  }
}

export function getSelectedBook(bookRefs,userid,cb)
{
  var userData = readDocument('users', userid);
  var feedData = readDocument('feeds', userData.feed);
  var selectbook= feedData.contents.map(getFeedItemSync);
  var selectedbook = selectbook.map((book)=> checkbook(bookRefs,book._id) );
  var newarray = new Array();
  for (var i = 0; i < selectedbook.length; i++) {
    if(selectedbook[i])
      newarray.push(selectedbook[i]);
    }
    emulateServerReturn(newarray,cb);
}

//Tim function goes here
export function getBook(bookid,cb){
  sendXHR('GET','/book/' + bookid,undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  });

}

export function postComment(bookitemId, author, contents, cb) {
  sendXHR('PUT','/bookitem/'+bookitemId+'/commentthread/comment',
  {
    author: author,
    contents: contents
  },(xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


//Tim function end



//leo function start
export function addHistoryBook(bookid,userid){
  var userData = readDocument('users', userid);
  var add = true;
  for (var i = 0; i < userData.historys.length; i++) {
    if(userData.historys[i] === bookid)
      add = false;
    }
  if(add){
    if(userData.historys.length > 2){
      userData.historys.splice(0, 1);
    }
    userData.historys.push(bookid);
  }
  writeDocument('users', userData);
}

export function gethistory(userid,cb)
{
  var userData = readDocument('users', userid);
  userData.historys = userData.historys.map((history)=> readDocument('booksItems', history) );
  emulateServerReturn(userData.historys,cb);
}

export function getbookcollection(cb)
{
  var feedData = readDocument('feeds', 1);
  feedData.contents = feedData.contents.map(getFeedItemSync);
  emulateServerReturn(feedData,cb);
}

export function myfilter(searchTerm, cb){
  var mysearch = searchTerm.toLowerCase();
  var feedItemIDs = readDocument('feeds', 1).contents;
  var result = feedItemIDs.filter((feedItemID) => {
      var feedItem = readDocument('booksItems', feedItemID);
      return feedItem.bookname.toLowerCase().indexOf(mysearch) !== -1;
  }).map(getFeedItemSync);
  emulateServerReturn(result,cb);
}
//leo function end

// here is the error handle function
//Do not change anything here
var token = 'eyJpZCI6NH0='; // <-- Put your base64'd JSON token here
/**
 * Properly configure+send an XMLHttpRequest with error handling, authorization token,
 * and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global UbookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      UbookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000 milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    UbookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    UbookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
