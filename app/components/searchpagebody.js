import React from 'react';

export default class Searchpagebody extends React.Component {
  render() {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="3px">Categories</font></b>
                <hr className="hrstyle" />
                <div>
                <a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">English</font></a>
                <br /><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Math</font></a>
                <br /><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">History</font></a>
                <br /><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Music</font></a>
                <br /><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Computer Science</font></a>
                <br /><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-down"></span><font color="blue">More</font></a>
                </div>
                <hr className="hrmargin"/>
                <b><font size="3px">Condition</font></b>
                <hr  className="hrstyle"/>
                <a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">New</font></a>
                <br /><a href="#"><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Used</font></a>
                <hr className="hrmargin"/>
                <b><font size="3px">Review</font></b>
                <hr className="hrstyle" />
                <div className="categories_star_color">
                  <a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span></a>
                  <br /><a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span></a>
                  <br /><a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></a>
                  <br /><a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></a>
                  <br /><a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="4px;">Result for "Web programming":</font></b>
                <hr className="hrstyle" />
                <div className="media">
                  <div className="media-left media-top">
                    <img src="../img/searchpage1.jpg" width="100px" />
                  </div>
                  <div className="media-body">
                    <a href="#"><font size="4px;" color="blue">Pure JavaScript (1999, Paperback) Web Developing Programming Code Java Very Good</font></a>
                    <br />Seller: <a href="#">Leo <span className="glyphicon glyphicon-user"></span></a>
                    <div className="categories_star_color">
                      <a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span></a>
                    </div>
                    post by yesterday at 3:48pm · UMass Amherst
                  </div>
                </div>
                <hr />
                <div className="media">
                  <div className="media-left media-top">
                    <img src="../img/searchpage2.jpg" width="100px" />
                  </div>
                  <div className="media-body">
                    <a href="#"><font size="4px;" color="blue">Programming ASP. NET MVC 4 : Developing Real-World Web Applications with ASP</font></a>
                    <br />Seller: <a href="#">Tim <span className="glyphicon glyphicon-user"></span></a>
                    <div className="categories_star_color">
                      <a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star-empty"></span></a>
                    </div>
                    <p>post by Feb 5th at 11:00pm · UMass Amherst</p>
                  </div>
                </div>
                <hr />
                <div className="media">
                  <div className="media-left media-top">
                    <img src="../img/searchpage3.jpg" width="100px" />
                  </div>
                  <div className="media-body">
                    <a href="#"><font size="4px;" color="blue">CGI Programming on the World Wide Web (Paperback)</font></a>
                    <br />Seller: <a href="#">Kai <span className="glyphicon glyphicon-user"></span></a>
                    <div className="categories_star_color zeromargin">
                      <a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span></a>
                    </div>
                    <p>post by Jan 9th at 6:20pm · UMass Amherst</p>
                  </div>
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
