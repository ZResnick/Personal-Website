import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <div id="main-navlink" className="navlink">
              <Link to="/home">ZACHARY L. RESNICK</Link>
            </div>
          </div>
          <div className="rightLinks">
            {/* <div className="navlink">
              <Link to="/home">ABOUT ME</Link>
            </div> */}
            <div className="navlink">
              <Link to="/projects">PROJECTS</Link>
            </div>
            <div className="navlink">
              <Link to="/resume">RESUME</Link>
            </div>
            {/* <div className="navlink">
              <Link to="/education">EDUCATION</Link>
            </div> */}
            <div className="navlink">
              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
