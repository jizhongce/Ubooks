import React from 'react';
import {unixTimeToString} from '../util.js';

export default class Profilepagebook extends React.Component {
  render() {
    return (
      <div className="media">
        <div className="media-left media-top">
          <img src={this.props.book.pic} width="100px" />
        </div>
        <div className="media-body">
          <a href="#"><font size="4px;" color="blue">{this.props.book.contents.bookname}</font></a>
          <br />Publisher: <a href="#">{this.props.book.contents.publisher}</a>
          <br />Description: {this.props.book.contents.descriptions}
          <div className="categories_star_color">
            <a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span></a>
          </div>
          post by {unixTimeToString(this.props.book.contents.postDate)}
        </div>
          <hr />
      </div>
    )

  }
}
