import React from 'react';

export default class CommentEntry extends React.Component{
  render() {
    return (
      <div>
      <div className="media-left media-top">
        PIC
      </div>
      <div className="media-body">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Write a comment..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              ☺
            </button>
						<button className="btn btn-default" type="button">
              Submit
            </button>
          </span>
        </div>
      </div>
      </div>
    )
  }



}
