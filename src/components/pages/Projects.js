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
              className="myButtons resumeDownloadBtn"
              href="https://github.com/ZResnick"
              target="_blank"
              rel="noopener noreferrer"
            >
              MY GITHUB
            </a>
          </div>
        </div>
        <div className="pageContent">
          <div className="outerDiv">
            <div className="individualProject divlab">
              <div className="projectHeader">
                <div>
                  <h5 className="projectName">DIVLAB</h5>
                  <p className="caption">AUGUST, 2019</p>
                </div>
                <div>
                  <a
                    className="myButtons singleProjectButton resumeDownloadBtn"
                    href="https://github.com/ZResnick/divlab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEE CODE
                  </a>
                </div>
              </div>
              <div className="projectFooter">
                <p className="caption">
                  A cloud-based web development platform that allows users to
                  create HTML5 websites through the use of a comprehensive
                  online drag and drop toolset.
                </p>
              </div>
            </div>
          </div>
          <div className="outerDiv">
            <div className="individualProject groover">
              <div className="projectHeader">
                <div>
                  <h5 className="projectName">GROOVER</h5>
                  <p className="caption">AUGUST, 2019</p>
                </div>
                <div>
                  <a
                    className="myButtons resumeDownloadBtn"
                    href="https://github.com/ZResnick/groover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEE CODE
                  </a>
                </div>
              </div>
              <div className="projectFooter">
                <p className="caption">
                  A collaborative listening room using Spotify. Groover allows a
                  user to add songs to a public playlist which can then be
                  upvoted or downvoted by others users in the room. Whichever
                  song has the most votes will be played next and will be
                  automatically removed from the playlist.
                </p>
              </div>
            </div>
          </div>
          <div className="outerDiv">
            <div className="individualProject graceShredder">
              <div className="projectHeader">
                <div>
                  <h5 className="projectName">GRACE SHREDDER</h5>
                  <p className="caption">JULY, 2019</p>
                </div>
                <div>
                  <a
                    className="myButtons resumeDownloadBtn"
                    href="https://github.com/ZResnick/grace-shopper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEE CODE
                  </a>
                </div>
              </div>
              <div className="projectFooter">
                <p className="caption">
                  A fully functioning fullstack e-commerce website built in
                  React, Redux, Express and Sequelize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
