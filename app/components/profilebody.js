import React from 'react';
import Profilepagebooklist from './Profilepagebooklist';
import {getUserdata} from '../server';


export default class Profilebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  refresh() {
    getUserdata(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  componentDidMount() {
    this.refresh();
  }
  render() {
    return (
      <div className="media main">
        <div className="media-left media-middle">
            <img src="img/Carter.jpg" className="img-circle profile-img" width="90" height="100" />
        </div>
        <div className="media-body">
          <div className="row">
            <div className="col-md-2">
            <h2 clss="account"><br /><b>Carter's <br />UBooks</b></h2>
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
                  <td><h3><b>{this.state.wantList}</b></h3></td>
                  <td><h3><b>{this.state.exchangeLists}</b></h3></td>
                  <td><h3><b>Amherst</b></h3></td>
                  <td><h3><b>{this.state.mailbox}</b></h3></td>
              </tbody>
            </table>
          </div>
          </div>
        </div>

      <div className="row">
      <div className="col-md-10">
        <div className="panel panel-default">
          <div className="panel-body">
            <Profilepagebooklist user={this.props.user} />
          </div>
        </div>
      </div>
    </div>

  </div>
    )
}
}
