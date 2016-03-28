import React from 'react';
import {Link} from 'react-router';

export default class Frontpagebody extends React.Component {
   render() {
      return (
        <div className="container">
          <div className="row removemargin">
            <div id="bigphoto" className="col-md-10 col-md-offset-1 add-bottom hovereffect">
              <img className="img-responsive" src="img/bookfair.jpg" />
              <div className="overlay">
                <h2>UBooks</h2>
                <Link to="/search"><div className="info">Find a book</div></Link>
                <Link to={"/post"}><div className="info">Post a book</div></Link>
              </div>
            </div>
          </div>

          <div className="row removemargin">
            <div className="col-md-5 col-md-offset-1 add-bottom smallphoto hovereffect" >
              <img className="img-responsive imgsize" src="img/students2.jpg" />
                <div className="overlay">
                  <h2>UBooks</h2>
                  <Link to="/mailbox/4"><div className="info">Mail</div></Link>
                </div>
            </div>

            <div className="col-md-5 add-bottom smallphoto hovereffect">
              <img className="img-responsive imgsize" src="img/Student.jpg" />
              <div className="overlay">
                <h2>UBooks</h2>
                <Link to="/howitwork"><div className="info">Contact Us</div></Link>
              </div>
            </div>
          </div>
        </div>
     )
   }
 }
