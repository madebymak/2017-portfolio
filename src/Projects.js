import React, { Component } from 'react';
import './Projects.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
      <Grid className="brd">
        <Row className="brd">
          <Col className="brd gallery" xs={12} md={4}>
          <img src="http://placehold.it/250x150"></img>
          </Col>
          <Col className="brd gallery" xs={12} md={4}>
          <img src="http://placehold.it/250x150"></img>
          </Col>
          <Col className="brd gallery" xs={12} md={4}>
          <img src="http://placehold.it/250x150"></img>
          </Col>
        </Row>
      </Grid>
    )

    return (
      <div className="latest" id="project">
        <div className="project-menu" onClick={this.open}>
          <div className="brd" id="project-text">
            <h2>Here are some of my recent projects.</h2>
          </div>
        </div>
        <div className="overlay-right" id="project-content">
          <Button className="closebtn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
          <div className="project-content">
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {work}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
