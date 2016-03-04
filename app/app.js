import React from 'react';
import ReactDOM from 'react-dom';
import Searchpage from './components/searchpage';
import Frontpage from './components/frontpage';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

/**
 * A fake profile page.
 */
class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Searchpage />
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


/**
 * The primary component in our application.
 * The Router will give it different child Components as the user clicks
 * around the application.
 *
 * If we implemented all of Facebook, this App would also contain Component
 * objects for the left and right content panes.
 */
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
    </Route>
  </Router>
),document.getElementById('UBooksFeed'));
