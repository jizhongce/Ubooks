import React from 'react';
import {unixTimeToString} from '../../util.js';

export default class Comment extends React.Component {

    render() {
      return (
        <div>
          <div className="media-left media-top">
            <img className="b1" src={this.props.data.author.pic} width="100"/>
          </div>
          <div className="media-body">
            <a href="#">{this.props.data.author.fullName}</a>: {this.props.data.contents}
             <br /><a href="#">Like</a> · <a href="#">Reply</a> · {unixTimeToString(this.props.data.postDate)}
          </div>
        </div>
      )
    }





}
