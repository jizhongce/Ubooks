import React from 'react';
import {getFeedData} from '../server';
import Profilepagebook from './profilepagebook';

export default class Profilepagebooklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents:[]
    };
  }

  refresh() {
    getFeedData(this.props.user, (bookData) => {
      this.setState(bookData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <div className="panel-body">
        <div className="title">
           <h3>BOOK IN NEED</h3>
        </div>
        <hr />
          {this.state.contents.map((bookData) => {
            return (
              <Profilepagebook user={4} book={bookData} />
            )
          })}
      </div>
    </div>
    )
  }
}
