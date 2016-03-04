import React from 'react';
import {unixTimeToString} from '../util.js';

export default class Searchpagebook extends React.Component {
  render() {
    return (
    <div>
      <div className="media">
        <div className="media-left media-top">
          <img src={this.props.data.pic} width="100px" />
        </div>
        <div className="media-body">
          <a href="#"><font size="4px;" color="blue">{this.props.data.contents.bookname}</font></a>
          <br />Owner: <a href="#">{this.props.data.owner_id.fullName}<span className="glyphicon glyphicon-user"></span></a>
          <div className="categories_star_color">
            <a href="#"><span className="glyphicon glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span></a>
          </div>
          post by {unixTimeToString(this.props.data.contents.postDate)}· {this.props.data.contents.location}
        </div>
      </div>
      <hr />
    </div>
    )
  }
}
