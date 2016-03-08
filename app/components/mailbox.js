import React from 'react';
import Header from './header.js';
import MailboxBody from './mailboxbody.js';

export default class Mailbox extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <MailboxBody user={4} mail={this.props.params.mail}/>
    </div>
    )
  }
}
