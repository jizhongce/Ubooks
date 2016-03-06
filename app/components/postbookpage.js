import React from 'react';
import Header from './header.js';
import Postbookbody from './Postbook/postbookbody.js'

export default class Postbookpage extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Postbookbody />
    </div>
    )
  }
}
