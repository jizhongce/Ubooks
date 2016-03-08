import React from 'react';
import Profileexchangebooklist from './profileexchangebooklist';
import {getUserdata,getExchangebook,getNeedbook,getMail} from '../server';
import Profileneedbooklist from './profileneedbooklist';


export default class Profilebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : '',
      exchange : [],
      want : [],
      message : []
    };
  }

  refresh() {
    getUserdata(this.props.user, (feedData) => {
      this.setState({user:feedData});
    });
    getExchangebook(this.props.user, (book) => {
      this.setState({exchange:book});
    });
    getNeedbook(this.props.user, (book) => {
      this.setState({want:book});
    });
    getMail(this.props.user, (Message) => {
      this.setState({message:Message});
    });
  }

  componentDidMount() {
    this.refresh();
  }
  render() {
    return (

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="media main">
              <div className="media-left media-middle">
                <img src="img/Carter.jpg" className="img-circle profile-img" width="90" height="100" />
              </div>
              <div className="media-body">
                <div className="row">
                  <div className="col-md-2">
                    <h2 clss="account"><br /><b>{this.state.user.fullName}’s<br />UBooks</b></h2>
                  </div>
                  <div className="col-md-8">
                    <table className="table main-table" border="0">
                      <thead>
                        <th> BOOK IN NEED</th>
                        <th> BOOK EXCHANGE</th>
                        <th> AVAILABLE PLACE</th>
                        <th> INBOX MESSAGE</th>
                      </thead>
                      <tbody>
                        <td><h3><b>{this.state.want.length}</b></h3></td>
                        <td><h3><b>{this.state.exchange.length}</b></h3></td>
                        <td><h3><b>Amherst</b></h3></td>
                        <td><h3><b>{this.state.message.length}</b></h3></td>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-10">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <Profileexchangebooklist user={this.props.user} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-10">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <Profileneedbooklist user={this.props.user} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}
}
