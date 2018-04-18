import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
              MouseEvent Cube
            </h1>
            <br />
            <p>
              Another experiment in Three.js. Uses the threes.domevents library to make the cube change color on mouseover and click.
            </p>
            <NavLink to=""></NavLink>
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
