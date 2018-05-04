import React from 'react';
import photo from './HangTime-photo.png';

const HangTime = () => {
  return (
    <div className="Projects">
      <div className="Projects-left">
        <div className="description">
          <h1 className="Projects-title">
            HangTime
          </h1>
          <br />
          <p>
          An interval timer made in React Native that allows users to easily create custom timers.
          </p>
          <br />
          <h3> GitHub Repository: </h3>
          <a href="https://github.com/sjlaine/HangTime">
            https://github.com/sjlaine/HangTime
          </a>
          <br />
          <br />
          <h3> Presentation Video: </h3>
          <a href="https://www.youtube.com/watch?v=8vNzAIlszWw">
            https://www.youtube.com/watch?v=8vNzAIlszWw
          </a>
        </div>
      </div>
      <div className="Projects-right">
        <img src={photo} alt="screenshot" />
      </div>
    </div>
  );
}

export default HangTime;
