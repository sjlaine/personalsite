import React from 'react';
import photo from './RotatingRings-photo.png';

const RotatingRings = () => {

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
      <div className="Projects-right">
        <img src={photo} alt="screenshot" />
      </div>
    </div>
  );
}

export default RotatingRings;
