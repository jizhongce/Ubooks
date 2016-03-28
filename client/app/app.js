import React from 'react';
import ReactDOM from 'react-dom';
import Searchpagebody from './components/searchpagebody.js';
import Bookpage from './components/bookpage';
import Postbookpagebody from './components/Postbook/postbookbody.js';
import Frontpagebody from './components/frontpagebody';
import Howitworkbody from './components/howitworkbody.js';
import Header from './components/header';
import {Link} from 'react-router';
import Profilebody from './components/profilebody';
import Mailbox from './components/mailbox';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import ErrorBanner from './components/errorbanner'

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Searchpagebody user={4}/>
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
        <Postbookpagebody user={4}/>
      </div>
    );
  }
}

class ContactPage extends React.Component {
  render() {
    return (
      <div>
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

class SuccessPost extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row body">
            <div className="col-md-6 col-md-offset-3">
              <br /><font size="10">Success!</font>
              <br /><font size="5">Thanks for posting!</font>
              <br /><Link to="/post"><font size="5">Go Back</font></Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

class FrontPage extends React.Component {
  render() {
    return <Frontpagebody user={4}/>;
  }
}

class PRofile extends React.Component {
  render(){
    return <Profilebody user={4}/>;
  }
}
class HowitWork extends React.Component {
  render() {
    return <Howitworkbody user={4} />;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          <div className="row">
              <div className="col-md-12">
                <ErrorBanner />
              </div>
            </div>
          <div className="row">
            {this.props.children}
          </div>
      </div>
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
      <Route path="profile" component={PRofile} />
      <Route path="book" component={BookPage} />
      <Route path="contact" component={ContactPage} />
      <Route path="successpost" component={SuccessPost} />
      <Route path="mailbox/:mail" component={Mailbox} />
    </Route>
  </Router>
),document.getElementById('UBooksFeed'));
