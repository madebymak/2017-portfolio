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
  };

  close() {
    this.setState({showModal: false});
  };

  render() {

    const bio = (
      <Modal className="box left" show={this.state.showModal}>
        <Modal.Header>
          <Button className="close-btn" onClick={this.close}><Glyphicon glyph="remove"/></Button>
        </Modal.Header>
        <Modal.Body>
          <h1>About Me</h1>
          <p>I am a web developer originally from Saskatchewan, now currently living in Vancouver, BC.
          Before pursuing a career in web development, I spent a number of years working in the print industry as a graphic designer.
          Through out that time, I found myself developing an interest in interactive design and decided to move onto the web.
          Outside of coding, I am an avid snowboarder and even moved to Japan in 2015 for a year to teach it.</p>
          <p>If you have any questions, I can be reached through email at <a href="mailto:mr.jmak@gmail.com?subject=From portfolio site">mr.jmak@gmail.com</a>.</p>
          <h3><a href="https://www.dropbox.com/s/id74r4pz3lkshc2/jacky_mak_resume.pdf?dl=0" target="blank">View my resume</a>.</h3>
        </Modal.Body>
      </Modal>
    )

    return (
      <div className="greet" id="greet">
        <div className="about-menu" onClick={this.open}>
          <div className="brd" id="bio-text">
            <h2>Hi, I'm Jacky and I'm a <p>web developer.</p>
            </h2>
          </div>
        </div>
        {bio}
      </div>
    );
  }
}

export default About;
