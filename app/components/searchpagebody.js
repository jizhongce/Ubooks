import React from 'react';
import {getFeedData,getSelectedBook} from '../server';
import Searchpagebook from './searchpagebook';
import Searchpagebookslist from './searchpagebookslist';

export default class Searchpagebody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      subject : 0,
      historys: []
    };
  }

  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState({
        historys:feedData.historys,
        contents:feedData.contents});
    });
  }

  handleAllSubmit(e){
    e.preventDefault();
    this.refresh();
  }
  handleEnglishSubmit(e){
    e.preventDefault();
    this.setState({
      subject : 3,
      contents:getSelectedBook(this.state.subject,this.props.user)});
  }
  handleCSSubmit(e){
    e.preventDefault();
    this.setState({
      subject : 1,
      contents:getSelectedBook(this.state.subject,this.props.user)});
  }
  handleMathSubmit(e){
    e.preventDefault();
    this.setState({
      subject : 2,
      contents:getSelectedBook(this.state.subject,this.props.user)});
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
                <br /><font color="black" size="3">Category</font>
                <hr className="hrcolor" />
                  <div><a className="subject" onClick={(e) => this.handleAllSubmit(e)}><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">All</font></a></div>
                  <div><a className="subject" onClick={(e) => this.handleEnglishSubmit(e)}><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">English</font></a></div>
                  <div><a className="subject" onClick={(e) => this.handleCSSubmit(e)}><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Computer Science</font></a></div>
                  <div><a className="subject" onClick={(e) => this.handleMathSubmit(e)}><span className="glyphicon categories_button_smaller glyphicon-chevron-right"></span><font color="blue">Math</font></a></div>
                <hr className="hrcolor" />
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

          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <b><font size="4px;">Search result:</font></b>
                <hr />
                  {this.state.contents.map((feedItem) => {
                    return (
                      <Searchpagebook user={this.props.user} key={feedItem._id} data={feedItem} />
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
