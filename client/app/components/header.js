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
            <h2><font size="6"><img className="logo logoposition" src="../img/Logo.jpg" /></font><b><font size="13">UBooks</font></b></h2>
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
              <ul className="ulstyle zeromargin">
                <Link to={"/profile"}><li className="btn1 btn-2"><span className="glyphicon glyphicon-user"></span>Carter</li></Link>
                <Link to={"/home"}><li className="btn1 btn-2">Home</li></Link>
                <Link to={"/search"}><li className="btn1 btn-2">Store</li></Link>
                <Link to={"/post"}><li className="btn1 btn-2">Post</li></Link>
                <Link to={"/howitwork"}><li className="btn1 btn-2">Help</li></Link>
                <Link to={"/mailbox/4"}><li className="btn1 btn-2">Mailbox</li></Link>
              </ul>

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
