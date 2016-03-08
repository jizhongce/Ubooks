import React from 'react';
import {Link} from 'react-router';

export default class MailList extends React.Component {
  render() {
    return (
      <div className="col-md-3 message-box">
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation">
              <b>New Message</b>
          </li>
          <hr />
          {
            this.props.mailbox.map((msg, i) => {
              var path = "mailbox/" + msg._id;
              var p = msg.participants[0].fullName;
              return (
                <li key={i} role="presentation">
                  <Link to={path}>
                    <span className="glyphicon glyphicon-comment"></span>
                     {p}
                    <span className="badge">{msg.Messages.length}</span>
                  </Link>
                  <hr />
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}
