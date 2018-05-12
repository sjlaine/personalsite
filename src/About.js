import React, { Component } from 'react';
import image from './AboutPhoto.png';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <img className="AboutPhoto" src={image} alt="AboutPhoto" />
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
          <br />
          <div className="Contact">
            <div className="Contact-links">
              <a href="https://github.com/sjlaine">Github</a>
              <a href="https://www.linkedin.com/in/sarah-laine/">LinkedIn</a>
              <a href="https://angel.co/sarah-laine">AngelList</a>
            </div>
            <div className="Contact-direct">
              <h3>email:</h3>
              <p>sjlaine624@gmail.com</p>
            </div>
          </div>
        </div>
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
        <div className="About-education">
          <h2>Education</h2>
          <h3>
            Fullstack Academy
          </h3>
          <h4>Software Engineering Immersive</h4>
          <p>
            At Fullstack Academy, I learned both front-end and back-end development
            in JavaScript. This three-month bootcamp focused on the NERD stack:
            Node, Express, React, and SQL Databases. I built an e-commerce site,
            a React Native interval timer app, and a Chrome extension in the second
            half of the program. Check out my projects on Github!
          </p>
          <h3>
            Washington University in St. Louis
          </h3>
          <p>
            B.A. in Dance and Pre-Medicine, Class of 2013
          </p>
        </div>
        <div className="About-work">
          <h2>
            Work Experience
          </h2>
          <h3>
            Brooklyn Boulders
          </h3>
          <h4>
            Route Setter: 2016 – 2017
          </h4>
          <ul>
            <li>
              Designed and built rock climbing routes at two Brooklyn Boulders facilities.
            </li>
            <li>
              Collaborated with other route setters to ensure that all climbing routes were creative, aesthetic, and consistent with brand standard.
            </li>
          </ul>
          <h4>
            Coach, and Senior Instructor: 2013 – 2016
          </h4>
          <ul>
            <li>
              Instructed climbers of all ages in rock climbing technique, training, and risk management, in individual as well as group settings.
            </li>
          </ul>
          <h4>
            Assistant Instruction Manager: 2014 – 2015
          </h4>
          <ul>
            <li>
              Played an integral role in the day-to-day management of this rock climbing gym.
            </li>
            <li>
              Designed curricula, marketed class offerings, and ran financial reports on instruction revenue, in collaboration with the instruction manager.
            </li>
            <li>
              Co-created and instructed a new Women Only climbing program.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
