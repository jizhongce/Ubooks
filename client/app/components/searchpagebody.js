import React from 'react';
import {gethistory, getbookcollection} from '../server';
import Searchpagebook from './searchpagebook';
import Searchpagebookslist from './searchpagebookslist';

export default class Searchpagebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      historys: []
    };
  }

  refresh() {
    var mhistorys = gethistory(this.props.user);
    var msearch = getbookcollection();
    this.setState({
      search:msearch.contents,
      historys: mhistorys
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
                <br /><font color="black" size="3">Popular Books</font>
                <hr className="hrcolor" />

              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="4px;">Search result:</font></b>
                <hr />
                  {this.state.search.map((feedItem) => {
                    return (
                      <Searchpagebook user={this.props.user} key={feedItem._id} data={feedItem} />
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="col-md-2 zeropadding">
            <div className="panel panel-default">
              <div className="panel-body">
                <br /><font color="black" size="3">History Search</font>
                <hr className="hrcolor" />
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
