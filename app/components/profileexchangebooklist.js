import React from 'react';
import Profilepagebook from './profilepagebook';
import {getExchangebook} from '../server';


export default class Profileexchangebooklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      exchange:[]
    };
  }
=======
      exchange : []
  };
}
>>>>>>> 54baee217335ea0e6864372dc1e44d9abc603104

  refresh() {
    getExchangebook(this.props.data, (book) => {
      this.setState({exchange:book});
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
          {this.state.exchange.map((bookData,i) => {
            return (
              <Profilepagebook key={i} user={4} book={bookData} />
            )
          })}
      </div>
    </div>
    )
  }
}
