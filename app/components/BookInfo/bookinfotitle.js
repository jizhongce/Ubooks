import React from 'react';
import {Link} from 'react-router';

export default class Bookinfotitle extends React.Component{

  render() {
    return (
    <div>
      <div className="row title">
        <div className="col-md-2">
          <img className="b1" src="img/BookInfoPage1.jpg" width="100"/>
        </div>
        <div className="col-md-5 pull-left">
          <h2><font size = "6" color="black">Book Informations</font></h2>
        </div>
        <div className="col-md-3 pull-right">
          <br /><Link to={"/search"}><span className="glyphicon glyphicon-hand-right"></span> Go Back to Search</Link>
        </div>
      </div>
    </div>
    );
  }



}
