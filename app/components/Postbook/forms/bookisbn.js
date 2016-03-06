import React from 'react';
import Isbn10 from './isbn/isbn10.js';
import Isbn13 from './isbn/isbn13.js';

export default class Bookisbn extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5 isbn">
            <Isbn10 />
          </div>
          <div className="col-md-5 isbn">
            <Isbn13 />
          </div>
        </div>
      </div>
    );
  }
}
