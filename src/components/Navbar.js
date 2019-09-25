import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, Dropdown } from 'semantic-ui-react';

export default class Navbar extends Component {
  render() {
    let options = [
      <Link to="/projects">PROJECTS</Link>,
      <Link to="/resume">RESUME</Link>,
      <Link to="/contact">CONTACT ME</Link>,
    ];

    return (
      <div>
        <nav>
          <div>
            <div id="main-navlink" className="navlink nameAndCaption">
              <Link to="/">ZACHARY RESNICK</Link>
            </div>
          </div>
          <div className="rightLinks">
            <div className="navlink">
              <Link to="/projects">PROJECTS</Link>
            </div>
            <div className="navlink">
              <Link to="/resume">RESUME</Link>
            </div>
            <div className="navlink">
              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
          <div className="hamburgerLinks">
            <Dropdown id="bars" icon="bars big" floating direction="left">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/resume">RESUME</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/projects">PROJECTS</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/contact">CONTACT ME</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    );
  }
}
