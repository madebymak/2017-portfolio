import React, { Component } from 'react';
import './Gallery.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Image from 'react-bootstrap/lib/Image';

import Wiki from './img/wiki_where.png';
import Tweetr from './img/tweetr.png';
import Chatty from './img/chatty.png';

class Gallery extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
      };
      this.showModal1 = this.showModal1.bind(this);
      this.showModal2 = this.showModal2.bind(this);
      this.showModal3 = this.showModal3.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

  showModal1() {
    this.setState({showModal1: true});
  }

  showModal2() {
    this.setState({showModal2: true});
  }

  showModal3() {
    this.setState({showModal3: true});
  }

  hideModal() {
    this.setState({
      showModal1: false,
      showModal2: false,
      showModal3: false
    });
  }

  render() {

    const close = (
      <Button className="close-btn" onClick={this.hideModal}><Glyphicon glyph="remove"/></Button>
    )

    return (
      <Grid className="brd gallery">
        <Row className="brd">

          <Col className="brd gallery" xs={12} md={4} onClick={this.showModal1}>
            <div>
              <Image src={Wiki} alt="alt" responsive/>
            </div>

            <Modal dialogClassName="project-modal" backdrop="static" show={this.state.showModal1}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body className="brd">
                <h2>Project #1</h2>
                <div className="full-img">
                <Image className="gallery-img" src={Wiki} alt="alt" responsive/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>www.linkhere.com</h3>
              </div>
              </Modal.Body>
            </Modal>
          </Col>

          <Col className="brd gallery" xs={12} md={4} onClick={this.showModal2}>
            <div>
              <Image src={Chatty} alt="alt" responsive/>
            </div>

            <Modal dialogClassName="project-modal" backdrop="static" show={this.state.showModal2}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body className="brd">
                <h2>Project #2</h2>
                <div className="full-img">
                <Image className="gallery-img" src={Chatty} alt="alt" responsive/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>www.linkhere.com</h3>
              </div>
              </Modal.Body>
            </Modal>
          </Col>

          <Col className="brd" xs={12} md={4} onClick={this.showModal3}>
            <div>
              <Image src={Tweetr} alt="alt" responsive/>
            </div>

            <Modal dialogClassName="project-modal" backdrop="static" show={this.state.showModal3}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body className="brd">
                <h2>Project #3</h2>
                <div className="full-img">
                <Image src={Tweetr} className="gallery-img" alt="alt" responsive/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>www.linkhere.com</h3>
              </div>
              </Modal.Body>
            </Modal>
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default Gallery;
