import React from 'react';

export default class Publisher extends React.Component{

  render() {
    return (
      <div>
      <form role="form">
        <div className="form-group">
          <label htmlFor="publisher">*Publisher:</label>
            <input type="text" className="form-control publisher" id="publisher" placeholder="Publisher"/>
        </div>
      </form>
      </div>
    );
  }

}
