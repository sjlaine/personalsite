import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class StackDocs extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div className="Projects">
        <div className="Projects-left">
          <div className="description">
            <h1 className="Projects-title">
              StackDocs
            </h1>
            <br />
            <p>
            A chrome extension that facilitates collaboration among software engineers and students on technical documentation. It allows users to highlight text, and post questions or annotations about that highlighted text for other users to read and respond to.
            </p>
            <br />
            <h3> Chrome Webstore: </h3>
            <a href="https://chrome.google.com/webstore/detail/stackdocs/fpcnhiglpjhcmfebebobiailbkldlemd">
              bit.ly/StackDocs
            </a>
            <br />
            <br />
            <h3> GitHub Repository: </h3>
            <a href="https://github.com/StackDocs/StackDocs">
              https://github.com/StackDocs/StackDocs
            </a>
          </div>
        </div>
        <div className="Projects-right">
          <div className="video">
            <YouTube
              videoId="qLbGun0nR-k"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
