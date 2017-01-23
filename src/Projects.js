import React, { Component } from 'react';
import './Projects.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class Projects extends Component {

  open() {
    document.getElementById("project-content").style.width = "100%";
    document.getElementById("project-text").style.display = "none";
    document.getElementById("project").style.backgroundColor = "transparent";
  };

  close() {
    document.getElementById("project-content").style.width = "0%";
    document.getElementById("project-text").style.display = "block";
    document.getElementById("project").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  };

  render() {

    const work = (
      <div className="overlay-right" id="project-content">
        <Button className="closebtn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
        <div className="project-content">
          <h2>Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )

    return (
      <div className="latest" id="project">
        <div className="project-menu" onClick={this.open}>
          <div className="brd" id="project-text">
            <h1>Recent Projects</h1>
          </div>
        </div>
        {work}
      </div>
    );
  }
}

export default Projects;
