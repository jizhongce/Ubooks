import React from 'react';

export default class Searchpagebook extends React.Component {
  render() {
    return (
    <div>
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
    </div>
    )
  }
}
