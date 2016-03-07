import React from 'react';
import CommentEntry from './commententry';
import {getUserData} from '../../server';


export default class CommentThread extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  refresh() {
    getUserData(this.props.data, (feedData) => {
      this.setState(feedData);
    });
  }

  componentDidMount() {
    this.refresh();
  }


  render() {
    return (
      <ul className="media-list">
        {React.Children.map(this.props.children, function(child) {
          return (
            <li className="media">
              {child}
            </li>
          )
        })}
        <li className="media">
          <CommentEntry user={this.state} onPost={this.props.onPost} />
        </li>
      </ul>
    )
  }
}
