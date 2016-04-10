import React from 'react';
import MailboxBody from './mailboxbody.js';

export default class Mailbox extends React.Component {
  render() {
    return (
    <div>
      <MailboxBody user={"000000000000000000000004"} mail={this.props.params.mail}/>
    </div>
    )
  }
}
