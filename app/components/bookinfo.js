import React from 'react';

export default class Bookinfo extends React.Component{

  render() {
    return (
      <div>
        <hr className="hrstyle" />
				<div className="row back">
					<div className="col-md-12">
					<br /><a href="#">Go Back to Search</a>
					</div>
				</div>
        <div className="row bookimage">
          <div className="col-md-3 pull-left">
            <center>PIC</center>
            <div className="view ">
              <center><a href="#">View</a></center>
              <center><a href="#"><span className="glyphicon categories_button_smaller glyphicon-user"></span>Contact Seller</a></center>
            </div>
          </div>
        <div className="col-md-9 pull-left">
          <div className="row title">
            <div className="col-md-12">
            <font size = "5" color="black">Introduction to al</font>
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
              <br /><font size = "4" color="black">Page:</font>
              <br /><font size = "4" color="black">List-Price:</font>
              <br /><font size = "4" color="black">Location:</font>
              <br /><font size = "4" color="black">Condition:</font>
              <br /><font size = "4" color="black">Description:</font>

            </div>
            <div className="col-md-6 right-line">
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">11111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>
              <br /><font size = "4" color="black">1111111</font>

            </div>
          </div>

        </div>
        </div>
        <div className="row buy-button">
          <div className="col-md-6">
            <button type="button" className="btn btn-default">
              <br /><font size = "4" color="black">I Want to Buy or Exchange this Book!</font>
            </button>
          </div>
        </div>

      </div>
    )
  }




}
