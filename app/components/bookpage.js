import React from 'react';
import Header from './header.js';
import Bookinfobody from './bookinfobody';

export default class Bookpage extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Bookinfobody />
    </div>
  )
}
}
