import React from 'react';

export default class Isbn13 extends React.Component{

  render() {
    return (
      <div>
      <form role="form">
        <div className="form-group">
          <label htmlFor="ISBN">*ISBN-13:</label>
            <input type="text" className="form-control ISBN" id="ISBN13" placeholder="ISBN-13"/>
        </div>
      </form>
      </div>
    );
  }

}
