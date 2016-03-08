import React from 'react';
import {getMailboxData, replyMail} from '../server';
import MailList from './maillist.js';
import MailContent from './mailcontent.js';

export default class MailboxBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailbox: [
      ]
    };
  }

  refresh() {
    getMailboxData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  handleMailReply(replyText) {
    replyMail(this.props.mail, this.props.user, replyText, (updatedMailBox) => {
      this.setState(updatedMailBox);
    });
  }

  render() {
    return (
      <div className="container content">
        <div className="row">
          <MailList mailbox={this.state.mailbox} onNav={this.refresh()} />
          <div className="col-md-8 mail">
            <div className="navbar">
              <div className="nav navbar-nav navbar-left">
                <h4 className="sender">{this.state.fullName}</h4>
              </div>
            </div>
            <hr />
            <MailContent mail={this.props.mail} onPost={(commentText) => this.handleMailReply(commentText)}/>
          </div>
        </div>
      </div>
    )
  }
}
