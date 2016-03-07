import React from 'react';

export default class Bookauthor extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 authors">
            <form role="form">
              <div className="form-group">
                <label htmlFor="author">*Author1:</label>
                  <input type="text" className="form-control author" id="author1" placeholder="Author Name eg. Carter Jiang"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}
