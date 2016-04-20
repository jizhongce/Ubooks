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

export function getUserdata(user, cb){
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

export function getExchangebook(user, cb) {
sendXHR('GET','/user/'+user+'/exchangebooks',undefined,(xhr)=>{
  cb(JSON.parse(xhr.responseText));
});
}

export function getFeedData(userid, cb) {
  sendXHR('GET','/feed/'+userid,undefined,(xhr)=>{
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

//Tim function goes here
//get book
export function getBook(bookid,cb){
  sendXHR('GET','/book/' + bookid,undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  });

}
//Post comment
export function postComment(bookitemId, author, contents, cb) {
  sendXHR('POST','/book/'+bookitemId+'/commentthread',
  {
    author: author,
    contents: contents,
    postDate: new Date().getTime()
  },(xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}
//Post books
export function postBook(owner_id,pic,bookname,author,edition,isbn_10,isbn_13,publisher,publish_date,list_price,condition,highlight,notes,description,location,cb){
  sendXHR('POST','/book/',
  {
    owner_id : owner_id,
    pic : pic,
    bookname : bookname,
    author : author,
    edition : edition,
    isbn_10 : isbn_10,
    isbn_13 : isbn_13,
    publisher : publisher,
    publish_date : publish_date,
    list_price : list_price,
    highlight : highlight,
    notes : notes,
    condition : condition,
    descriptions : description,
    location : location,
    comments: [],
    postDate: new Date().getTime()
  },() => {
    cb();
  });
}
//Tim function end

//leo function start
export function addHistoryBook(bookid,userid,cb){
  sendXHR('PUT', '/user/' + userid + '/historys/' + bookid, undefined, () => {
    cb();
  });
}

export function gethistory(userid,cb)
{
  sendXHR('GET', '/user/' + userid + '/historys', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getbookcollection(userid,cb)
{
  sendXHR('GET', '/books', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function myfilter(searchTerm, cb){
  sendXHR('GET', '/books/' + searchTerm, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}
//leo function end

// here is the error handle function
//Do not change anything here
var token ='eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNCJ9'; // <-- Put your base64'd JSON token here
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
