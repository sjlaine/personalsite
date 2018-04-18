import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Projects extends Component {
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
        <div className="video">
          <YouTube
            videoId="qLbGun0nR-k"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <h1 className="Projects-title">
          StackDocs
        </h1>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
