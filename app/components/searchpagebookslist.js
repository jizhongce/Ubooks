import React from 'react';
import Searchpagebook from './searchpagebook';
import {getFeedData} from '../server';

export default class Searchpagebookslist extends React.Component {
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
    )
  }
}
