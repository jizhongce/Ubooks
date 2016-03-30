import React from 'react';
import Header from './header.js';
import Bookinfobody from './Bookinfo/bookinfobody';
import {getbook} from '../server';


export default class Bookpage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bookdata : ''
    };
  }

  refresh() {
    getbook(1, (book) => {
      this.setState({bookdata: book});
    });
  }

  componentDidMount() {
    this.refresh();
  }




  render() {
    if(this.state.bookdata == ""){
      return (
      <div>
        <Header />
      </div>
    )
    }
    else {
    return (
    <div>
      <Header />

            <Bookinfobody data={this.state.bookdata} user={this.props.user} book={this.props.book}/>

    </div>
  )
}
}
}
