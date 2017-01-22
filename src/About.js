import React, { Component } from 'react';
import './About.css';

class About extends Component {

  open() {
    document.getElementById("about").style.width = "100%";
    document.getElementById("bio-text").style.display = "none";
    document.getElementById("greet").style.backgroundColor = "transparent";
  };

  close() {
    document.getElementById("about").style.width = "0%";
    document.getElementById("bio-text").style.display = "block";
    document.getElementById("greet").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  };

  render() {

    const bio = (
      <div className="bio overlay" id="about">
        <button className="closebtn" onClick={this.close}>Close</button>
        <h2>A Little About Me</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    )

    return (
      <div className="greet" id="greet">
        <div className="about-menu" onClick={this.open}>
          <div className="brd" id="bio-text">
            <h1>Hi, my name is Jacky.</h1>
          </div>
        </div>
        {bio}
      </div>
    );
  }
}

export default About;
