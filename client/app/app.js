import React from 'react';
import ReactDOM from 'react-dom';
import Searchpagebody from './components/searchpagebody.js';
import Postbookpagebody from './components/Postbook/postbookbody.js';
import Frontpagebody from './components/frontpagebody';
import Howitworkbody from './components/howitworkbody.js';
import Bookinfobody from './components/Bookinfo/bookinfobody';
import ResetDatabase from'./components/resetdatabase.js';
import Header from './components/header';
import {Link} from 'react-router';
import Profilebody from './components/profilebody';
import Mailbox from './components/mailbox';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import ErrorBanner from './components/errorbanner'
import {hideElement} from './util';
import {myfilter,gethistory,getbookcollection} from './server';
import Searchpagebook from './components/searchpagebook';
import Searchpagebookslist from './components/searchpagebookslist';

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Searchpagebody user={"000000000000000000000004"}/>
      </div>
    );
  }
}

// HEAD
class BookPage extends React.Component {
  render() {
    return (
      <div>
        <Bookinfobody user={"000000000000000000000004"} book={this.props.params.bookid}/>
      </div>
    );
  }
}

class PostbookPage extends React.Component {
  render() {
    return (
      <div>
        <Postbookpagebody user={"000000000000000000000004"}/>
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

class loginmockup extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row body">
            <div className="col-md-6 col-md-offset-3">
              <br /><font size="5">This is login page</font>
              <br /><font size="5">Will finish this when we learn about it</font>
              <br /><Link to="/howitwork"><font size="5">Go Back</font></Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

class FrontPage extends React.Component {
  render() {
    return <Frontpagebody user={"000000000000000000000004"}/>;
  }
}

class PRofile extends React.Component {
  render(){
    return <Profilebody user={"000000000000000000000004"}/>;
  }
}
class otherprofile extends React.Component {
  render(){
    return <Profilebody user={this.props.params.id}/>;
  }
}
class HowitWork extends React.Component {
  render() {
    return <Howitworkbody user={"000000000000000000000004"} />;
  }
}

class SearchResultsPage extends React.Component {
  getSearchTerm() {
    var queryVars = this.props.location.query;
    var searchTerm = "";
    if (queryVars && queryVars.q) {
      searchTerm = queryVars.q;
      searchTerm.trim();
    }
    return searchTerm;
  }
  render() {
    var searchTerm = this.getSearchTerm();
    return (
      <SearchResults key={searchTerm} user={"000000000000000000000004"} searchTerm={searchTerm} />
    );
  }
}

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidSearch: false,
      results: [],
      historys:[],
      books:[]
    };
  }

  refresh() {
    gethistory(this.props.user,(history) => {
      this.setState({
        historys:history
      });
    });
    getbookcollection(this.props.user, (bookarray) => {
      this.setState({
        books:bookarray
      });
    });
    var searchTerm = this.props.searchTerm;
    if (searchTerm !== "") {
      myfilter(searchTerm, (feedItems) => {
        this.setState({
          results: feedItems
        });
      });
    } else {
      this.setState({
        invalidSearch: true
      });
    }
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
    <div>
      <div className={hideElement(!this.state.invalidSearch)+ " col-md-offset-3"}>
        <b>Invalid search query.</b>
      </div>
      <div className={hideElement(this.state.invalidSearch) + " container"}>
        <div className="row">
          <div className="col-md-2 zeropadding">
            <div className="panel panel-default">
              <div className="panel-body">
                <font color="black" size="3">Recommendation</font>
                <hr className="hrcolor" />
                  {this.state.books.map((feedItem) => {
                    if(feedItem._id === "000000000000000000000002" || feedItem._id === "000000000000000000000004")
                    return (
                      <Searchpagebookslist user={this.props.user} key={feedItem._id} data={feedItem} />
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body keywordinput zeromargin">
                <div className="col-md-12 bookinstore">
                  <b><font className="pull-left">Search Results for {this.props.searchTerm}: ({this.state.results.length} results)</font></b>
                </div>
                <hr/>
                {this.state.results.map((feedItem) => {
                  return (
                    <Searchpagebook user={this.props.user} key={feedItem._id} data={feedItem} />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-md-2 zeropadding">
            <div className={hideElement(this.state.historys.length === 0) + " panel panel-default" }>
              <div className="panel-body">
                <font  color="black" size="3">Watch History</font>
                <hr className="hrcolor"/>
                    {this.state.historys.map((feedItem) => {
                      return (
                        <Searchpagebookslist key={feedItem._id} data={feedItem} />
                      )
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

class App extends React.Component {
  render() {
    var queryVars = this.props.location.query;
    var searchTerm = null;
    if (queryVars && queryVars.searchTerm) {
      searchTerm = queryVars.searchTerm;
    }
    return (
      <div>
        <Header searchTerm={searchTerm} />
        <div className="row zeromargin">
          <ErrorBanner />
        </div>
        {this.props.children}
        <ResetDatabase />
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
      <Route path="otherprofile/:id" component={otherprofile} />
      <Route path="book/:bookid" component={BookPage} />
      <Route path="contact" component={ContactPage} />
      <Route path="successpost" component={SuccessPost} />
      <Route path="mailbox/:mail" component={Mailbox} />
      <Route path="searchresult" component={SearchResultsPage} />
      <Route path="login" component={loginmockup} />
    </Route>
  </Router>
),document.getElementById('UBooksFeed'));
