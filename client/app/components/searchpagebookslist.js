import React from 'react';
import {Link} from 'react-router';

export default class Searchpagebookslist extends React.Component {
  render() {
    return (
    <div>
          <img src={this.props.data.pic} width="100px" />
        <div>
          <Link to={"/book"}><font size="4px;" color="blue">{this.props.data.bookname}</font></Link>
        </div>
      <hr className="hrcolor"/>
    </div>
    )
  }
}
