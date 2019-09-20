import React, { Component } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import Routes from './Routes';

export default class MainPage extends Component {
  render() {
    return (
      <div id="mainPage">
        <div id="biography">
          <div id="nameAndCaption">
            <Image src="images/ZacharyResnick.png" size="small" circular />
            <p className="bioName nameAndCaption">ZACHARY RESNICK</p>
            <a
              className="nameAndCaption emailAddress"
              href="mailto:zachary.l.resnick@gmail.com"
            >
              ZACHARY.L.RESNICK@GMAIL.COM
            </a>
            <br />
            <br />
            <div className="iconList">
              <Icon className="icon" name="linkedin" size="large" />
              <Icon className="icon" name="facebook" size="large" />
              <Icon className="icon" name="github" size="large" />
              <Icon className="icon" name="instagram" size="large" />
              <Icon className="icon" name="mail" size="large" />
            </div>
          </div>
          <div id="bioAbout">
            <h4 className="nameAndCaption">ABOUT</h4>
            <p>Hi, I'm Zach, and I'm a fullstack web developer.</p>
          </div>
        </div>
        <div id="alternatingPages">
          <Routes />
        </div>
      </div>
    );
  }
}
