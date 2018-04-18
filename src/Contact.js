import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="Contact-intro">
          <h2>
            Sarah Laine
          </h2>
          <h4>
            Based in Brooklyn, NY
          </h4>
          <br />
          <div className="Contact-direct">
            <p>
              email: sjlaine624@gmail.com
            </p>
             <p>
              phone: 516-972-2849
            </p>
          </div>
          <br />
          <div className="Contact-links">
            <a href="https://github.com/sjlaine">Github</a>
            <a href="https://www.linkedin.com/in/sarah-laine/">LinkedIn</a>
            <a href="https://angel.co/sarah-laine">AngelList</a>
          </div>
        </div>
      </div>
    )
  }
}
