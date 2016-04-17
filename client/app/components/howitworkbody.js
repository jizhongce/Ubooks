import React from 'react';
import {Link} from 'react-router';

export default class Howitworkbody extends React.Component {
  render() {
    return (
    <div>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body backgroundpic" >
              <div className="text textlocat"><b><font>How it work?</font></b></div>
              <hr className="vin_hr"/>
              <div className="col-md-10 col-md-offset-1">
              <font className="blackfont">It is a free service website for college students called “UBooks”, which may just provide service for UMass students in the beginning for testing. Not only could it help students to deal with the used textbook which they do not need any more, but also give the a solution how to get used textbook from the students who are in the same university. UMass students can sign up an account for UBooks, and then they can post the information about the books which they try to sell or exchange.</font>
              <br /><font className="blackfont" size="4px;">On our UBooks website, we don’t do the transaction, instead we will provide all the contact information for the buyer, so that they can trade in person or by mail or leave message in their UBooks account.</font>
              </div>
            </div>
            <div className="panel-footer">
              <div className="text textlocat"><b><font size="5px;">What can help you with?</font></b></div>
              <hr className="vin_hr" />
              <div className="row">
                <div className="col-md-5 col-md-offset-2">
                  <div className="media">
                    <div className="media-left media-top">
                      <div className="row fifteenbottommargin"></div>
                      <img src="img/book-need.jpg" width="75px" height="75px" />
                    </div>
                    <div className="media-body">
                      <br /><b><font size="5px;">Your books</font></b>
                      <br /><Link to={"/search"}><span className="glyphicon button_smaller glyphicon-hand-right"></span> Looking for a book</Link>
                      <br /><Link to={"/post"}><span className="glyphicon button_smaller glyphicon-hand-right"></span> Try to post a book</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="media">
                    <div className="media-left media-top">
                      <img src="img/howitwork_account_seeting.jpg" width="100px" />
                    </div>
                    <div className="media-body">
                      <br /><b><font size="5px;">Account setting</font></b>
                      <br /><Link to={"/profile"}><span className="glyphicon button_smaller glyphicon-hand-right"></span> Profile setting</Link>
                      <br /><Link to={"/login"}><span className="glyphicon button_smaller glyphicon-hand-right"></span> Login information</Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="vin_hr"/>
              <div className="row zeromarginbotton">
                <div className="col-md-6">
                  <pre className="prestyle"></pre>
                  <div className="text textlocat" >
                    <b><font size="5px;">Need our assistance?</font></b>
                    <br /><a href="mailto:aaa@5icool.org?subject=ccc&body=xxx%0d%0ayyy"><button className="spbuttonstyle" type="button" name="button"><font>Contact us</font></button></a>
                  </div>
                </div>
                <div className="col-md-5 col-md-offset-1">
                  <img src="img/howitwork_worker.jpg" width="250px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
