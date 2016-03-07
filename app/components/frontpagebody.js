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
                <Link to="/search">{<a className="info" href="#">Find a book</a>}</Link>
                <Link to={"/post"}><a className="info" href="#">Post a book</a></Link>
              </div>
            </div>
          </div>

          <div className="row removemargin">
            <div className="col-md-5 col-md-offset-1 add-bottom smallphoto hovereffect" >
              <img className="img-responsive imgsize" src="img/students2.jpg" />
                <div className="overlay">
                  <h2>UBooks</h2>
                  <a className="info" href="#">Mail</a>
                </div>
            </div>

            <div className="col-md-5 add-bottom smallphoto hovereffect">
              <img className="img-responsive imgsize" src="img/Student.jpg" />
              <div className="overlay">
                <h2>UBooks</h2>
                <Link to="/howitwork">{<a className="info" href="#">Contact Us</a>}</Link>
              </div>
            </div>
          </div>
        </div>
     )
   }
 }
