import React from 'react';
import Publishdate from './publish/publishdate.js';
import Publisher from './publish/publisher.js';

export default class Bookpublish extends React.Component{

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-5 publish" >
          <Publisher />
        </div>
        <div className="col-md-5 publish" >
          <Publishdate />
        </div>
      </div>
      </div>
    );
  }

}
