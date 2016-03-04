import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
    <div>
      <div className="page-header pageheader1">
        <div className="row zeromargin" >
          <div className="col-md-10 col-md-offset-1 zeropadding" >
            <div className="btn-toolbar" role="toolbar">
              <div className="btn-group pageheader1_button pull-left" role="group">
                <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-user"></span>
                  <font size="3">Carter</font>
                </button>
                <Link to={"/home"}>{<button type="button" className="btn btn-default">
                  <font size="3">Home</font>
                </button>}</Link>
                <Link to={"/search"}>{<button type="button" className="btn btn-default">
                  <font size="3">Find books</font>
                </button>}</Link>
                <button type="button" className="btn btn-default">
                  <font size="3">Post books</font>
                </button>
                <Link to={"/howitwork"}>{<button type="button" className="btn btn-default">
                  <font size="3">Help&Contact</font>
                </button>}</Link>
                <button type="button" className="btn btn-default">
                  <font size="3">MailBox</font>
                </button>
              </div>
              <form className="navbar-form pull-right zeropadding threemargin" role="search">
                <div className="input-group headerinput">
                  <input type="text" className="form-control headerinput"  placeholder="Search Book"/>
                  <span className="input-group-btn search_button">
                    <button type="submit" className="btn btn-default">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
    </div>
    )
  }
}
