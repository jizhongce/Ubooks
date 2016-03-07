import React from 'react';
import {getExchangebook} from '../server';
import Profilepagebook from './profilepagebook';

export default class Profileexchangebooklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    exchange:[]
    };
  }

  refresh() {
    getExchangebook(this.props.user, (bookData) => {
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
           <h3>BOOK EXCHANGE</h3>
        </div>
        <hr />
          {this.state.exchange.map((bookData) => {
            return (
              <Profilepagebook user={4} book={bookData} />
            )
          })}
      </div>
    </div>
    )
  }
}
