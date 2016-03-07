import React from 'react';

export default class Bookedition extends React.Component{

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-12 bookedition">
          <form role="form">
            <div className="form-group">
              <label htmlFor="edition">*Edition:</label>
                <input type="text" className="form-control edition" id="edition" placeholder="Ediotion eg. 3rd"/>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
