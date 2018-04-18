import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <div className="video">
            <YouTube
              videoId="qLbGun0nR-k"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
        <div className="Projects-right">
          <div className="description">
            <h1 className="Projects-title">
              StackDocs
            </h1>
            <br />
            <p>
            A chrome extension that facilitates collaboration among software engineers and students on technical documentation. It allows users to highlight text, and post questions or annotations about that highlighted text for other users to read and respond to.
            </p>
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
