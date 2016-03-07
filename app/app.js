import React from 'react';
import ReactDOM from 'react-dom';
import Searchpage from './components/searchpage';
import Frontpage from './components/frontpage';
import Howitwork from './components/howitwork';
import Profile from './components/profile';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Searchpage />
      </div>
    );
  }
}

class FrontPage extends React.Component {
  render() {
    return <Frontpage />;
  }
}

class PRofile extends React.Component {
  render(){
    return <Profile />;
  }
}
class HowitWork extends React.Component {
  render() {
    return <Howitwork />;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={FrontPage} />
      <Route path="search" component={SearchPage} />
      <Route path="home" component={FrontPage} />
      <Route path="howitwork" component={HowitWork} />
      <Route path="profile" component={PRofile} />
    </Route>
  </Router>
),document.getElementById('UBooksFeed'));
