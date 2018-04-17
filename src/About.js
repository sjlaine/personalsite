import React, { Component } from 'react';
import image from './AboutPhoto.png';

export default class Header extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-intro">
          <h3>
            Hello, there! My name is Sarah.
          </h3>
          <p>
            I'm a rock climber turned software engineer,
            <br />
            recently graduated from Fullstack Academy in NYC.
          </p>
          </div>
        <img className="AboutPhoto" src={image} alt="AboutPhoto" />
      </div>
    )
  }
}
