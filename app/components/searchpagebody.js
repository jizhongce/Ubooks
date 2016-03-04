import React from 'react';
import Searchpagebookslist from './searchpagebookslist';

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
                <Searchpagebookslist user={this.props.user}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
