import React from 'react';
import Postbookforms from './postbookforms';
import Postbooktitle from './postbooktitle';



export default class Postbookbody extends React.Component{

  render() {
    return (
    <div className="container">
      <div className="row postbook">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <Postbooktitle />
              <hr className="hrcolor" />
              <Postbookforms />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }


}
