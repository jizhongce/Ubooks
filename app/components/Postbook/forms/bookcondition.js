import React from 'react';

export default class Bookcondition extends React.Component{

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-12 condition" >
          <form className="form-inline" role="form">
            <div className="form-group con">
              <label htmlFor="condition">*Condition:</label>
                <input type="checkbox" /> New
                <input type="checkbox" /> Excellent
                <input type="checkbox" /> Great
                <input type="checkbox" /> Good
                <input type="checkbox" /> So So
            </div>
          </form>
        </div>
      </div>

      </div>
    );
  }



}
