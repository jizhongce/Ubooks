import React from 'react';
import Header from './header.js';
import Bookinfobody from './Bookinfo/bookinfobody';
import {getFeedData} from '../server';


export default class Bookpage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[]
    };
  }

  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState({contents:feedData.contents});
    });
  }

  componentDidMount() {
    this.refresh();
  }




  render() {
    return (
    <div>
      <Header />
        {this.state.contents.map((bookItem,i) => {
          if(bookItem._id == this.props.book){
          return (
            <Bookinfobody key={i} data={bookItem} user={this.props.user} book={this.props.book}/>
          )
        }
        })}
    </div>
  )
}
}
