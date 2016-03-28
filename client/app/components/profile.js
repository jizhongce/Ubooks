import React from 'react';
import Header from './header.js';
import Profilebody from './profilebody';

export default class Profile extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Profilebody user={4}  />
    </div>
    )
  }
}
