import React from 'react';
import ReactDOM from 'react-dom';
import Searchpage from './components/searchpage';
import Bookpage from './components/bookpage';
import Postbookpage from './components/postbookpage';
import Frontpage from './components/frontpage';
import Howitwork from './components/howitwork';
import Header from './components/header';
import {Link} from 'react-router';
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
        <Bookpage user={4} book={1}/>
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

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row body">
            <div className="col-md-6 col-md-offset-3">
              <br /><font size="10">Sold Out!</font>
              <br /><font size="5">Please Wait for other onwer post!</font>
              <br /><Link to="/search"><font size="5">Go Back</font></Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

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
      <Route path="contact" component={ContactPage} />
    </Route>
  </Router>
),document.getElementById('UBooksFeed'));
