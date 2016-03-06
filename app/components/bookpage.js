import React from 'react';
import Header from './header.js';
import Bookinfobody from './Bookinfo/bookinfobody';

export default class Bookpage extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Bookinfobody user={4} book={1}/>
    </div>
  )
}
}
