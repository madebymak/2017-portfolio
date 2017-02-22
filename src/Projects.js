import React, { Component } from 'react';
import './Projects.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';
import Gallery from './Gallery.js';

class Projects extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        showModal: false,
      };
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
    }

  open() {
    this.setState({showModal: true});
  };

  close() {
    this.setState({showModal: false});
  };

  render() {

    const projects = (
      <Modal className="box right" show={this.state.showModal}>
        <Modal.Header>
          <Button className="close-btn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
        </Modal.Header>
        <Modal.Body>
          <h2>Recent Projects</h2><br/>
          <Gallery/>
        </Modal.Body>
      </Modal>
    )

    return (
      <div className="greet" onClick={this.open}>
        <div className="brd project-menu">
          <div className="talk-bubble tri-right round left-top">
            <div className="talktext">
              <p>Recent projects</p> <p>I've done.</p>
            </div>
          </div>
        </div>
        {projects}
        <div className="mobile-view right-btn">
          <i className="icon fa fa-briefcase" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Projects;
