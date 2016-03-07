import React from 'react';

export default class Publishdate extends React.Component{

  render() {
    return (
      <div>
      <form role="form">
        <div className="form-group">
          <label htmlFor="publisher">*Publish_date:</label>
            <input type="text" className="form-control publisher" id="publisher_date" placeholder="eg. 11/11/2011"/>
        </div>
      </form>
      </div>
    );
  }

}
