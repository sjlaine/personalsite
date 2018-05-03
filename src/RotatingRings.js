import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class RotatingRings extends Component {
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
              Rotating Rings
            </h1>
            <br />
            <p>
              My first experiment with Three.js.
            </p>
            <br />
            <h3> GitHub Repository: </h3>
            <a href="https://github.com/sjlaine/RotatingRings">
              https://github.com/sjlaine/RotatingRings
            </a>
          </div>
        </div>
        <div className="Projects-rights">
          <div className="video">
            <YouTube
              videoId="WAY2DeM-To4"
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
