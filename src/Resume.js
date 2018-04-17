import React, { Component } from 'react';
import resume from './PhotoResume.png';

export default class Resume extends Component {

  render() {
    return (
      <div>
        <img className="Resume" src={resume} />
      </div>
    );
  }
}
