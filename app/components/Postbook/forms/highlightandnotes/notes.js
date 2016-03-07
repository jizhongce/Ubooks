import React from 'react';

export default class Notes extends React.Component{

  render() {
    return (
      <div>
        <form role="form">
          <div className="form-group note">
            <label htmlFor="Notes">*Notes:</label>
            <input type="checkbox" /> Yes
            <input type="checkbox" /> No
          </div>
        </form>
      </div>
    );
  }
}
