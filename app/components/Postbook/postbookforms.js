import React from 'react';
import Bookname from './forms/bookname.js'
import Bookedition from './forms/bookedition.js'
import Bookauthor from './forms/bookauthor.js'
import Bookisbn from './forms/bookisbn.js'
import Bookpublish from './forms/bookpublish.js'
import Bookcondition from './forms/bookcondition.js'
import Bookhighlightandnotes from './forms/bookhighandnotes.js'
import Bookmoney from './forms/bookmoney.js'
import Bookdiscription from './forms/bookdiscription.js'

export default class Postbookforms extends React.Component{

  render() {
    return (
      <div>
        <Bookname />
        <Bookedition />
        <Bookauthor />
        <Bookisbn />
        <Bookpublish />
        <Bookcondition />
        <Bookhighlightandnotes />
        <Bookmoney />
        <Bookdiscription />
          <div className="row button">
            <div className="col-md-6" >
              <button  type="button" className="btn btn-default">
                Cancel
              </button>
            </div>
            <div className="col-md-6 submit" >
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </div>
          </div>
      </div>
    );
  }


}
