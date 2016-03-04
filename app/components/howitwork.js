import React from 'react';
import Header from './header.js';
import Howitworkbody from './howitworkbody';

export default class Howitwork extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Howitworkbody user={4}/>
    </div>
    )
  }
}
