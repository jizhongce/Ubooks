import React from 'react';

export default class Bookdiscription extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 discription">
            <label htmlFor="condition">Condition:</label>
            <form role="form">
              <textarea className="form-control" rows="3" placeholder="Other Comments"></textarea>
            </form>
          </div>
        </div>
      </div>
    );
  }

}
