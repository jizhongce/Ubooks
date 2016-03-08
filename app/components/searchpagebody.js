import React from 'react';
import {getFeedData,getSelectedBook} from '../server';
import Searchpagebook from './searchpagebook';
import Searchpagebookslist from './searchpagebookslist';

export default class Searchpagebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      bookid : 1
    };
  }

  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState({contents:feedData.contents});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      bookid : 3,
      contents:getSelectedBook(this.state.bookid,this.props.user)});
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <a className="subject" onClick={(e) => this.handleSubmit(e)}><font size="3px">Browsing History</font></a>
                <hr className="hrcolor" />
                  {this.state.contents.map((feedItem) => {
                    if(feedItem._id==3)
                    return (
                      <Searchpagebookslist key={feedItem._id} data={feedItem} />
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="4px;">Search result:</font></b>
                <hr />
                  {this.state.contents.map((feedItem) => {
                    return (
                      <Searchpagebook key={feedItem._id} data={feedItem} />
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
