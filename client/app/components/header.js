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
    var trimmedTerm = "";
    if(this.state.searchTerm !== null)
      trimmedTerm = this.state.searchTerm.trim();
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

      <div id="hideheaderbar" className="page-header pageheader1 hidden zeroopa">
        <div className="row zeromargin" >
          <div className="col-md-10 col-md-offset-1 zeropadding" >
            <div className="btn-toolbar" role="toolbar">
              <ul className="ulstyle zeromargin">
                <Link to={"/profile"}><li className="btn1 btn-2"><span className="glyphicon glyphicon-user"></span>Carter</li></Link>
                <Link to={"/home"}><li className="btn1 btn-2">Home</li></Link>
                <Link to={"/search"}><li className="btn1 btn-2">Store</li></Link>
                <Link to={"/post"}><li className="btn1 btn-2">Post</li></Link>
                <Link to={"/howitwork"}><li className="btn1 btn-2">Help</li></Link>
              </ul>

              <form id="hideform" className="navbar-form pull-right zeropadding threemargin" role="search">
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

      <div className="btn-group-vertical rightbuttonbar" role="group">
        <button id="gohome" className="btn rightbuttonbar_button" type="button"><Link to={"/home"}><span className="glyphicon glyphicon-home rightbuttonbar_span"><br/><b>HOME</b></span></Link></button>
        <button id="playbmusic" className="btn hidden rightbuttonbar_button" type="button"><span className="glyphicon glyphicon-music"><br/><b>OFF</b></span></button>
        <button id="pausebmusic" className="btn rightbuttonbar_button" type="button"><span className="glyphicon glyphicon-music"><br/><b>ON</b></span></button>
        <button id="gotop" className="btn rightbuttonbar_button" type="button"><span className="glyphicon glyphicon-chevron-up"><br/><b>TOP</b></span></button>
      </div>
    </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};
