import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class HangTime extends Component {
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
              HangTime
            </h1>
            <br />
            <p>
            HangTime is an interval timer made in React Native that allows users to easily create custom timers.
            </p>
            <br />
            <h3> GitHub Repository: </h3>
            <a href="https://github.com/sjlaine/HangTime">
              https://github.com/sjlaine/HangTime
            </a>
          </div>
        </div>
        <div className="Projects-right">
          <div className="video">
            <YouTube
              videoId="8vNzAIlszWw"
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
