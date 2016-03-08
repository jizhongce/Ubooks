import React from 'react';
import Profilepagebook from './profilepagebook';
import {getNeedbook} from '../server';


export default class Profileneedbooklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      want : []
  };
}

  refresh() {
    getNeedbook(this.props.data, (book) => {
      this.setState({want:book});
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
          {this.state.want.map((bookData,i) => {
            return (
              <Profilepagebook key={i} user={4} book={bookData} />
            )
          })}
      </div>
    </div>
    )
  }
}
