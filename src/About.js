import React, { Component } from 'react';
import image from './AboutPhoto.png';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="Contact">
          <img className="AboutPhoto" src={image} alt="AboutPhoto" />
          <br />
          <br />
          <div className="Contact-links">
            <a href="https://github.com/sjlaine">Github</a>
            <a href="https://www.linkedin.com/in/sarah-laine/">LinkedIn</a>
            <a href="https://angel.co/sarah-laine">AngelList</a>
          </div>
          <br />
          <div className="Contact-direct">
            <h3>e.</h3><p>sjlaine624@gmail.com</p>
          </div>
        </div>
        <div className="About-intro">
          <h1>
            Hello, there! My name is Sarah.
          </h1>
          <p>
            I'm a rock climber turned software engineer,
            recently graduated from Fullstack Academy in NYC.
            I'm based in Brooklyn, NY.
          </p>
          <p>
            In my previous position as a route setter at Brooklyn Boulders,
            I designed indoor rock climbs, and focused on the intersection
            of design and functionality. I am excited to bring these skills
            to the software engineering field!
          </p>
          <div className="About-skills">
            <h2>Technical Skills </h2>
            <h3>
              Proficient
            </h3>
            <p>
              JavaScript, Node.js, React, Sequelize, HTML, CSS, Express, Git
            </p>
            <h3>
              Knowledgeable
            </h3>
            <p>
              React Native, Three.js, Firebase, Mocha
            </p>
            <h3>
              Some Experience
            </h3>
            <p>
              SQL, Heroku
            </p>
        </div>
        </div>
      </div>
    )
  }
}
