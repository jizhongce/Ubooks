import React from 'react';
import {unixTimeToString} from '../util.js';
import {Link} from 'react-router';
import {addHistoryBook} from '../server';

export default class Searchpagebook extends React.Component {
  onBook() {
    // If searchText is 'sandals', navigates to #/search/q?=sandals
    this.context.router.push({ pathname: "/book" });
  }
  handleAdd(e){
    e.preventDefault();
    addHistoryBook(this.props.data._id,this.props.user,() => {
      this.onBook();
    });
  }

  render() {
    return (
    <div>
      <div className="media">
        <div className="media-left media-top">
          <img src={this.props.data.pic} width="100px" />
        </div>
        <div className="media-body">
          <a onClick={(e) => this.handleAdd(e)}><font size="4px;" color="blue">{this.props.data.bookname}</font></a>
          <br />Owner: <Link to="profile">{this.props.data.owner_id.fullName}<span className="glyphicon glyphicon-user"></span></Link>
          <div className="categories_star_color">
            <span className="glyphicon glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span><span className="glyphicon categories_star_color glyphicon-star"></span>
          </div>
          post by {unixTimeToString(this.props.data.postDate)}· {this.props.data.location}
        </div>
      </div>
      <hr />
    </div>
    )
  }
}

Searchpagebook.contextTypes = {
  router: React.PropTypes.object.isRequired
};
