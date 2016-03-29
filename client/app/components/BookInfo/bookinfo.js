import React from 'react';
import {Link} from 'react-router';

export default class Bookinfo extends React.Component{

  render() {
    return (
      <div>
        <hr className="hrcolor" />
        <br />
        <div className="row bookimage">
          <div className="col-md-3 pull-left">
            <center><img className="b1" src={this.props.data.pic} width="100"/></center>
          </div>
        <div className="col-md-9 pull-left">
          <div className="row title">
            <div className="col-md-12">
            <font size = "5" color="black">{this.props.data.bookname}</font>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 left-line">
              <br /><font size = "4" color="black">Edition:</font>
              <br /><font size = "4" color="black">Author:</font>
              <br /><font size = "4" color="black">ISBN-10:</font>
              <br /><font size = "4" color="black">ISBN-13:</font>
              <br /><font size = "4" color="black">Publisher:</font>
              <br /><font size = "4" color="black">Publish-Date:</font>
              <br /><font size = "4" color="black">List-Price:</font>
              <br /><font size = "4" color="black">Location:</font>
              <br /><font size = "4" color="black">Condition:</font>
              <br /><font size = "4" color="black">Notes:</font>
              <br /><font size = "4" color="black">Highlight:</font>
              <br /><font size = "4" color="black">Description:</font>

            </div>
            <div className="col-md-6 right-line">
              <br /><font size = "4" color="black">{this.props.data.edition}</font>
              <br /><font size = "4" color="black">{this.props.data.author}</font>
              <br /><font size = "4" color="black">{this.props.data.isbn_10}</font>
              <br /><font size = "4" color="black">{this.props.data.isbn_13}</font>
              <br /><font size = "4" color="black">{this.props.data.publisher}</font>
              <br /><font size = "4" color="black">{this.props.data.publish_date}</font>
              <br /><font size = "4" color="black">{this.props.data.list_price}</font>
              <br /><font size = "4" color="black">{this.props.data.location}</font>
              <br /><font size = "4" color="black">{this.props.data.condition}</font>
              <br /><font size = "4" color="black">{this.props.data.highlight}</font>
              <br /><font size = "4" color="black">{this.props.data.notes}</font>
              <br /><font size = "4" color="black">{this.props.data.descriptions}</font>

            </div>
          </div>

        </div>
        </div>
        <div className="row buy-button">
          <div className="col-md-6">
            <Link to={"/contact"}><button type="button" className="btn btn-default buyorexchange">
              <font size = "4" color="black">I Want to Buy or Exchange this Book!</font>
            </button></Link>
          </div>
        </div>

      </div>
    )
  }




}
