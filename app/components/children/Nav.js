import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('./nav.css');

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <Link to={"/"} ><div className="page-scroll nav-left-text"><p>Home</p></div></Link>
              </li>
              <li>
                <Link to={"/Aboutme"} ><div className="page-scroll nav-left-text"><p>About Me</p></div></Link>
              </li>
              <li>
                <Link to={"/Portfolio"} ><div className="page-scroll nav-left-text"><p>Portfolio</p></div></Link>
              </li>
                <li>
                <Link to={"/contact"}><div className="page-scroll nav-left-text" data-toggle="modal"><p>Contact Me</p></div></Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}