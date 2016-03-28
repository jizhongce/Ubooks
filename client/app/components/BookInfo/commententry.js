import React from 'react';

export default class CommentEntry extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

  handlePost(e) {
      e.preventDefault();
          var comment = this.state.value.trim();
          if (comment !== "") {
            // Post comment
            this.props.onPost(this.state.value);
            this.setState({ value: "" });
          }
        }

  handleChange(e) {
      this.setState({ value: e.target.value });
    }

  render() {
    return (
      <div>
      <div className="media-left media-top">
        <img className="b1" src={this.props.user.pic} width="35" />
      </div>
      <div className="media-body">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Write a comment..."
            value={this.state.value} onChange={(e) => this.handleChange(e)} />
          <span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={(e) => this.handlePost(e)}>
              Submit
            </button>
          </span>
        </div>
      </div>
      </div>
    )
  }



}
