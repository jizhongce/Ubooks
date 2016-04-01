import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearchButtonClick(e) {
    e.preventDefault();
    this.search();
  }

  search() {
    var trimmedTerm = this.state.searchTerm.trim();
    if (trimmedTerm !== "") {
      this.context.router.push({ pathname: "/searchresult", query: { q: trimmedTerm } });
    }
    this.setState({
      searchTerm:''
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchTerm !== null) {
      this.setState({
        searchTerm: newProps.searchTerm
      });
    }
  }

  render() {
    return (
    <div>
      <div className="page-header pageheader2">
        <div className="row header2background">
          <div id="logo" className="col-md-11 col-md-offset-1">
            <br />
            <h2><font size="6"><img className="logo logoposition" src="../img/Logo.jpg" /></font><font size="13">UBooks</font></h2>
            <h4>Students exchange textbook with students!</h4>
            <h4>·FAST ·EASY ·BEST</h4>
            <br />
          </div>
        </div>
      </div>

      <div id="headerbar" className="page-header pageheader1">
        <div className="row zeromargin" >
          <div className="col-md-10 col-md-offset-1 zeropadding" >
            <div className="btn-toolbar" role="toolbar">
              <div className="btn-group pageheader1_button pull-left" role="group">
                <Link to={"/profile"}>{<button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-user"></span>
                  <font>Carter</font></button>}</Link>
                <Link to={"/home"}>{<button type="button" className="btn btn-default">
                  <font>Home</font>
                </button>}</Link>
                <Link to={"/search"}>{<button type="button" className="btn btn-default">
                  <font>Find books</font>
                </button>}</Link>
                <Link to={"/post"}><button type="button" className="btn btn-default">
                  <font>Post books</font>
                </button></Link>
                <Link to={"/howitwork"}>{<button type="button" className="btn btn-default">
                  <font>Help&Contact</font>
                </button>}</Link>
                <Link to={"/mailbox/4"}><button type="button" className="btn btn-default">
                  <font>MailBox</font>
                </button></Link>
              </div>
              <form className="navbar-form pull-right zeropadding threemargin" role="search">
                <div className="input-group headerinput">
                  <span className="input-group-btn search_button">
                    <input type="text" className="form-control"  placeholder="Search Book" value={this.state.searchTerm} onChange={(e) => this.handleChange(e)}/>
                    <button type="submit" className="btn btn-default" onClick={(e) => this.handleSearchButtonClick(e)}>
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};
