import React, { Component } from 'react';
import image from './AboutPhoto.png';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <img className="AboutPhoto" src={image} alt="AboutPhoto" />
        <div className="About-intro">
          <h3>
            Hello, there! My name is Sarah.
          </h3>
          <br />
          <p>
            I'm a rock climber turned software engineer,
            recently graduated from Fullstack Academy in NYC.
          </p>
          <br />
          <p>
            In my previous position as a route setter at Brooklyn Boulders,
            I designed indoor rock climbs, and focused on the intersection
            of design and functionality. I am excited to bring these skills
            to the software engineering field!
          </p>
        </div>
      </div>
    )
  }
}
