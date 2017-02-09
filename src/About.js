import React, { Component } from 'react';
import './About.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';

class About extends Component {

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
    // document.getElementById("about").style.width = "100%";
    // document.getElementById("bio-text").style.display = "none";
    // document.getElementById("greet").style.backgroundColor = "transparent";
  };

  close() {
    this.setState({showModal: false});

    // document.getElementById("about").style.width = "0%";
    // document.getElementById("bio-text").style.display = "block";
    // document.getElementById("greet").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  };

  render() {

    const bio = (
      <Modal className="box left" show={this.state.showModal}>
        <Modal.Header>
          <Button className="close-btn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
        </Modal.Header>
        <Modal.Body>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>View my resume.</h2>
        </Modal.Body>
      </Modal>
      // <div className="brd bio overlay" id="about">
      //   <Button className="closebtn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
      //   <div className="brd overlay-content">
      //     <h1>About Me test</h1>
      //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      //     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      //     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      //     <h2>View my resume.</h2>
      //   </div>
      // </div>
    )

    return (
      <div className="greet" id="greet">
        <div className="about-menu" onClick={this.open}>
          <div className="brd" id="bio-text">
            <h2>Hi, I'm Jacky and I'm a <p>web developer.</p>
            <p>Click here to learn more about me</p>
            </h2>
          </div>
        </div>
        {bio}
      </div>
    );
  }
}

export default About;
