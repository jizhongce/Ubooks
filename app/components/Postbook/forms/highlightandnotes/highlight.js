import React from 'react';

export default class Hightlight extends React.Component{

  render() {
    return (
      <div>
        <form role="form">
          <div className="form-group high">
            <label htmlFor="highlight">*Highlight:</label>
              <input type="checkbox" /> Yes
              <input type="checkbox" /> No
          </div>
        </form>
      </div>
    );
  }
}
