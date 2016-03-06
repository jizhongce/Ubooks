import React from 'react';
import ReactDOM from 'react-dom';
import Searchpage from './components/searchpage';
import Bookpage from './components/bookpage';
import Postbookpage from './components/postbookpage';
import Frontpage from './components/frontpage';
import Howitwork from './components/howitwork';
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

// HEAD
class BookPage extends React.Component {
  render() {
    return (
      <div>
        <Bookpage />
      </div>
    );
  }
}

class PostbookPage extends React.Component {
  render() {
    return (
      <div>
        <Postbookpage />
      </div>
    );
  }
}

/**
 * The Feed page. We created a new component just to fix the userId at 4.
 */
class FrontPage extends React.Component {
  render() {
    return <Frontpage />;
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
      <Route path="post" component={PostbookPage} />
      <Route path="howitwork" component={HowitWork} />
      <Route path="book" component={BookPage} />
    </Route>
  </Router>
),document.getElementById('UBooksFeed'));
