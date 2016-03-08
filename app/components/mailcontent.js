import React from 'react';
import {getMailData} from '../server';
import {unixTimeToString} from '../util.js';

export default class MailContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Messages: [
      ],
      value: ""
    };
  }
  handleChange(e) {
      this.setState({value: e.target.value});
  }

  handleKeyUp(e) {
    if(e.key === "Enter") {
      var reply = this.state.value.trim();
      if(reply !== "") {
        this.props.onPost(this.state.value);
        this.setState({ value: ""});
      }
    }
  }

  refresh() {
    getMailData(this.props.mail, (mailData) => {
      this.setState(mailData);
    });
  }

  componentDidMount() {
    this.refresh();
  }
  render() {
    return (
      <div>
        {this.state.Messages.map((msg, i) => {
          return (
            <div key={i} className="msg-container">
              <span className="glyphicon glyphicon-user"></span>
              <span className="msg-sender">{msg.From.fullName}</span>
              <div className="row msg">
                <div className="col-md-8">
                  <p>
                    {msg.contents}
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="msg-date"> {unixTimeToString(msg.sendDate)}</span>
                </div>
              </div>
            </div>
          );
        })}
        <input type="text" className="form-control" placeholder="Reply..." value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">
            <span className="glyphicon glyphicon-camera"></span>
          </button>
          <button className="btn btn-default" type="button">
            ☺
          </button>
        </span>
      </div>
    )
  }
}
