import React from 'react';
import {gethistory, getbookcollection, myfilter} from '../server';
import Searchpagebook from './searchpagebook';
import Searchpagebookslist from './searchpagebookslist';
import {hideElement} from '../util';

export default class Searchpagebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendation:[],
      books: [],
      historys: [],
      searchTerm: ''
    };
  }

  handleChange(e) {
    e.preventDefault();
    var value = e.target.value;
    this.setState({
      searchTerm: value
    });
    myfilter(value, (result) => {
        this.setState({books:result});
    });
  }

  refresh() {
    gethistory(this.props.user,(history) => {
      this.setState({historys:history});
    });
    getbookcollection(this.props.user, (bookarray) => {
      this.setState({
        books:bookarray,
        recommendation:bookarray
      });
    });
    this.setState({
      searchTerm: ''
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 zeropadding">
            <div className="panel panel-default">
              <div className="panel-body">
                <font color="black" size="3">Recommendation</font>
                <hr className="hrcolor" />
                  {this.state.recommendation.map((feedItem) => {
                    if(feedItem._id === 2 || feedItem._id === 4)
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
                  <b><font className="pull-left">Books available in store:</font></b>
                  <input type="text" className="keywordinput pull-right"  placeholder="Filter. try enter: app" value={this.state.searchTerm} onChange={(e) => this.handleChange(e)}/>
                </div>
                <hr/>
                {this.state.books.map((feedItem) => {
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
    )
  }
}
