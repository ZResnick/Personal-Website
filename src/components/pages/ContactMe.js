import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class ContactMe extends Component {
  render() {
    return (
      <div>
        <div className="pageHeader">
          <div>
            <h1 className="nameAndCaption">CONTACT ME</h1>
          </div>
        </div>
        <div className="pageContent">
          <p>
            Feel free to get in contact with me at: <br />
            <a href="mailto:zachary.l.resnick@gmail.com">
              Zachary.L.Resnick@Gmail.com
            </a>
          </p>
          <div className="iconList">
            <a
              href="https://www.linkedin.com/in/zachresnick1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="iconAbout" name="linkedin" size="large" />
            </a>
            <a
              href="https://github.com/ZResnick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="iconAbout" name="github" size="large" />
            </a>
            <a href="mailto: zachary.l.resnick@gmail.com">
              <Icon className="iconAbout" name="mail" size="large" />
            </a>
            <a
              href="https://www.instagram.com/zachzachresnickresnick/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="iconAbout" name="instagram" size="large" />
            </a>
            <a
              href="https://www.facebook.com/zresnick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="iconAbout" name="facebook" size="large" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
