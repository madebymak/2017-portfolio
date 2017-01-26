import React, { Component } from 'react';
import './Projects.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Gallery from './Gallery.js';

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

  click() {
    console.log("fired");
  };

  render() {

    return (
      <div className="latest" id="project">
        <div className="project-menu" onClick={this.open}>
          <div className="brd" id="project-text">
            <h2>Click here to see some of my recent projects.</h2>
          </div>
        </div>
        <div className="overlay-right" id="project-content">
          <Button className="closebtn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
          <div className="project-content">
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Gallery/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
