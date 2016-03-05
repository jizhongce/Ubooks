import React from 'react';
import Header from './header.js';
import Searchpagebody from './searchpagebody';

export default class Searchpage extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Searchpagebody />
    </div>
    )
  }
}
