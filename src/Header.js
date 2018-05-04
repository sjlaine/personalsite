import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h2 className="App-title">
          <NavLink to="/about">
            Sarah June Laine
          </NavLink>
        </h2>
        <div className="App-subtitle">
          <h2>
            <NavLink to="/projects">
              PROJECTS
            </NavLink>
          </h2>
          <h2>
            <NavLink to="/about">
              ABOUT
            </NavLink>
          </h2>
        </div>
      </header>
    )
  }
}
