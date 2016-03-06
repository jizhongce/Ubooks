import React from 'react';

export default class Isbn10 extends React.Component{

  render() {
    return (
      <div>
      <form role="form">
        <div className="form-group">
          <label htmlFor="ISBN">*ISBN-10:</label>
            <input type="text" className="form-control ISBN" id="ISBN10" placeholder="ISBN-10"/>
        </div>
      </form>
      </div>
    );
  }

}
