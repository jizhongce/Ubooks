import React from 'react';
import {unixTimeToString} from '../../util.js';
import {Link} from 'react-router';


export default class Comment extends React.Component {

    render() {
      return (
        <div>
          <div className="media-left media-top">
            <img className="b1" src={this.props.data.author.pic} width="35" />
          </div>
          <div className="media-body">
            <Link to={"/otherprofile/"+this.props.data.author._id}><font>{this.props.data.author.fullName}</font></Link>: <font>{this.props.data.contents}</font>
             <br />{unixTimeToString(this.props.data.postDate)}
          </div>
        </div>
      )
    }





}
