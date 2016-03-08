import React from 'react';
import {getFeedData} from '../server';
import Searchpagebook from './searchpagebook';
import Searchpagebookslist from './searchpagebookslist';

export default class Searchpagebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="3px">Browsing History</font></b>
                <hr className="hrcolor" />
                  {this.state.contents.map((feedItem) => {
                    if(feedItem._id==3)
                    return (
                      <Searchpagebookslist key={feedItem._id} data={feedItem} />
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="4px;">Search result:</font></b>
                <hr />
                  {this.state.contents.map((feedItem) => {
                    return (
                      <Searchpagebook key={feedItem._id} data={feedItem} />
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
