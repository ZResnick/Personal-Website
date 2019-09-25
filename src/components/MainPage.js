import React, { Component } from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

export default class MainPage extends Component {
  render() {
    return (
      <div id="mainPage">
        <div id="biography">
          <div id="nameAndCaption">
            <Image
              src="images/ZacharyResnick.png"
              size="small"
              circular
              className="headshot"
            />
            <div className="sideBio">
              <p className="bioName nameAndCaption">ZACHARY RESNICK</p>
              <h4 className="nameAndCaption">ABOUT ME</h4>
              <p>
                Hi, I'm Zach, and I'm a fullstack web-developer based in New
                York. I'm experienced in JavaScript, Node, Express, React,
                Redux, PostgreSQL, and Firebase, but have a passion for learning
                new platforms and emerging technologies.
              </p>
            </div>
            <br className="hide" />
            <br className="hide" />
            <a
              className="nameAndCaption emailAddress hide"
              href="mailto:zachary.l.resnick@gmail.com"
            >
              ZACHARY.L.RESNICK@GMAIL.COM
            </a>
            <br className="hide" />
            <br className="hide" />
            <div className="iconList hide">
              <a
                href="https://www.linkedin.com/in/zachresnick1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" name="linkedin" size="large" />
              </a>
              <a
                href="https://github.com/ZResnick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" name="github" size="large" />
              </a>
              <a href="mailto: zachary.l.resnick@gmail.com">
                <Icon className="icon" name="mail" size="large" />
              </a>
              <a
                href="https://www.instagram.com/zachzachresnickresnick/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" name="instagram" size="large" />
              </a>
              <a
                href="https://www.facebook.com/zresnick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" name="facebook" size="large" />
              </a>
            </div>
          </div>
          <div id="bioAbout" className="hide">
            <br />
            <Link className="myButtons" to="/resume">
              LEARN MORE
            </Link>
          </div>
          <br className="hide" />
          <div>
            <p className="nameAndCaption copyright hide">
              © ZACHARY L. RESNICK
            </p>
          </div>
        </div>
        <div id="alternatingPages">
          <Routes />
        </div>
      </div>
    );
  }
}
