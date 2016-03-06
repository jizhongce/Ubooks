import React from 'react';
import Header from './header.js'
import Frontpagebody from './frontpagebody.js'

export default class Frontpage extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Frontpagebody user={4}/>
      </div>
    )
  }
}
