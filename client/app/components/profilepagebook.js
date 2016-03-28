import React from 'react';
import {unixTimeToString} from '../util.js';
import {Link} from 'react-router';

export default class Profilepagebook extends React.Component {
  render() {
    return (
      <div className="media">
        <div className="media-left media-top">
          <img src={this.props.book.pic} width="100px" />
        </div>
        <div className="media-body">
          <Link to="/book"><font size="4px;" color="blue">{this.props.book.contents.bookname}</font></Link>
          <br />Publisher: {this.props.book.contents.publisher}
          <br />Course: {this.props.book.contents.course}
          <div className="categories_star_color">
          </div>
          post by {unixTimeToString(this.props.book.contents.postDate)}
        </div>
          <hr />
      </div>
    )

  }
}
