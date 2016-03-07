import React from 'react';
import Notes from './highlightandnotes/notes.js';
import Hightlight from './highlightandnotes/highlight.js';

export default class Bookhighlightandnotes extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5 highlight">
            <Hightlight />
          </div>
          <div className="col-md-5 notes">
            <Notes />
          </div>
        </div>
      </div>
    );
  }
}
