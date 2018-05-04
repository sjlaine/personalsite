import React from 'react';
import photo from './MouseEvents-photo.png';

const MouseEvents = () => {
  return (
    <div className="Projects">
      <div className="Projects-left">
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
      <div className="Projects-right">
        <img src={photo} alt="screenshot" />
      </div>
    </div>
  );
}

export default MouseEvents;
