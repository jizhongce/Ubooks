import React from 'react';

export default class Postbooktitle extends React.Component{

  render() {
    return (
      <div>
        <div className="row Title-line">
          <div className="col-md-2">
            <img className="b1" src="img/bookpost.png" width="100"></img>
          </div>
          <div className="col-md-10">
            <br /><font size = "6" color = "Black">Post Your Book Information</font>
          </div>
        </div>
      </div>
    );
  }


}
