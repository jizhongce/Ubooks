import React from 'react';

export default class Bookname extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 bookname">
            <form role="form">
              <div className="form-group">
                <label htmlFor="name">*Book Name:</label>
                  <input type="text" className="form-control name" id="name" placeholder="Book Name eg.Introduce to Java"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
