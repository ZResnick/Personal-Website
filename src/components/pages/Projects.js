import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="pageHeader">
          <div>
            <h1 className="nameAndCaption">PROJECTS</h1>
            <p className="caption">A SELECTION OF MY FAVORITE PROJECTS</p>
          </div>
          <div>
            <a
              className="buttons resumeDownloadBtn"
              href="https://github.com/ZResnick"
              target="_blank"
              rel="noopener noreferrer"
            >
              MY GITHUB
            </a>
          </div>
        </div>
        <div className="pageContent">
          <div className="individualProject">
            <div className="projectHeader">
              <div>
                <h5>DIVLAB</h5>
                <p>AUGUST, 2019</p>
              </div>
              <div>
                <a
                  className="buttons resumeDownloadBtn"
                  href="https://github.com/ZResnick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEE CODE
                </a>
              </div>
            </div>
            <div className="projectFooter">
              <p>
                A cloud-based web development platform that allows users to
                create HTML5 websites through the use of a comprehensive online
                drag and drop toolset.
              </p>
            </div>
          </div>
          <div className="individualProject">
            <div className="projectHeader">
              <h5>GROOVER</h5>
              <p>AUGUST, 2019</p>
            </div>
            <div className="projectFooter">
              <p>FOOTER</p>
            </div>
          </div>
          <div className="individualProject">
            <div className="projectHeader">
              <h5>GRACE SHREDDER</h5>
              <p>JULY, 2019</p>
            </div>
            <div className="projectFooter">
              <p>FOOTER</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
