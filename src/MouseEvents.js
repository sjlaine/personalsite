import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class MouseEvents extends Component {
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
          <YouTube
            videoId="rJOvYbsXOGI"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className="Projects-right">
          <div className="description">
            <h1 className="Projects-title">
              MouseEvents Cube
            </h1>
            <br />
            <p>
              Another experiment in Three.js. Uses the threex.domevents library to make the cube change color on mouseover and click.
            </p>
            <br />
            <h3> GitHub Repository: </h3>
            <a href="https://github.com/sjlaine/cube-mouse-events">
              https://github.com/sjlaine/cube-mouse-events
            </a>
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
