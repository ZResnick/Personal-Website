import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div className="pageHeader">
          <div>
            <h1 className="nameAndCaption">MY RESUME</h1>
            <p className="caption">
              FEEL FREE TO REACH OUT TO ME AT: <br />
              <a
                className="nameAndCaption emailAddress"
                href="mailto:zachary.l.resnick@gmail.com"
              >
                ZACHARY.L.RESNICK@GMAIL.COM
              </a>
            </p>
          </div>
          <div>
            <a
              className="myButtons resumeDownloadBtn"
              href="/images/Zach.Resnick.Resume.png"
              download="Zach.Resnick.Resume.png"
            >
              DOWNLOAD
            </a>
          </div>
        </div>
        <div className="pageContent">
          <img
            className="resumeImg"
            alt="My Resume"
            src="/images/Zach.Resnick.Resume.png"
          ></img>
        </div>
      </div>
    );
  }
}
