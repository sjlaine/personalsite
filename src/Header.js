import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h2 className="App-subtitle">
          <NavLink to="/about">
            About
          </NavLink>
        </h2>
        <h2 className="App-subtitle">
          <NavLink to="/projects">
            Projects
          </NavLink>
        </h2>
        <h1 className="App-title">Sarah June Laine</h1>
        <h2 className="App-subtitle">
          <NavLink to="/resume">
            Resume
          </NavLink>
        </h2>
        <h2 className="App-subtitle">
          <NavLink to="/contact">
            Contact
          </NavLink>
        </h2>
      </header>
    )
  }
}
