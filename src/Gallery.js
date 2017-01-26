import React, { Component } from 'react';
import './Gallery.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';

class Gallery extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);

    }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {

    return (
      <Grid className="brd">
        <Row className="brd">
          <Col className="brd gallery" xs={12} md={4} onClick={this.showModal}>
            <img src="http://placehold.it/250x150"></img>

            <Modal dialogClassName="modal-dialog" show={this.state.show} onHide={this.hideModal}>
            <Modal.Header>
              <Button className="closebtn" onClick={this.hideModal}><Glyphicon glyph="remove"/></Button>
            </Modal.Header>
            <Modal.Body>
              <img src="http://placehold.it/250x150"></img>
              <h2>Project #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Modal.Body>
          </Modal>
        </Col>

        <Col className="brd gallery" xs={12} md={4} onClick={this.showModal}>
          <img src="http://placehold.it/250x150"></img>

          <Modal dialogClassName="modal-dialog" show={this.state.show} onHide={this.hideModal}>
          <Modal.Header>
            <Button className="closebtn" onClick={this.hideModal}><Glyphicon glyph="remove"/></Button>
          </Modal.Header>
          <Modal.Body>
            <img src="http://placehold.it/250x150"></img>
            <h2>Project #3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Modal.Body>
        </Modal>
      </Col>

      <Col className="brd gallery" xs={12} md={4} onClick={this.showModal}>
        <img src="http://placehold.it/250x150"></img>

        <Modal dialogClassName="modal-dialog" show={this.state.show} onHide={this.hideModal}>
        <Modal.Header>
          <Button className="closebtn" onClick={this.hideModal}><Glyphicon glyph="remove"/></Button>
        </Modal.Header>
        <Modal.Body>
          <img src="http://placehold.it/250x150"></img>
          <h2>Project #3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Modal.Body>
      </Modal>
    </Col>

      </Row>
    </Grid>
    );
  }
}

export default Gallery;
