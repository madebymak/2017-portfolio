import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Image from 'react-bootstrap/lib/Image';

import Tweet from '../img/tweetr.png';

class Tweetr extends Component {

  constructor(props) {
      super(props);
      this.state = {
        showModal: false,
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

  showModal() {
    this.setState({showModal: true});
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {

    const close = (
      <Button className="close-btn" onClick={this.hideModal}><Glyphicon glyph="remove"/></Button>
    )

    return (
      <Grid className="brd gallery">
        <Row className="brd">

          <Col className="brd gallery" onClick={this.showModal}>
            <div>
              <Image src={Tweet} alt="alt" responsive/>
            </div>

            <Modal dialogClassName="project-modal" backdrop="static" show={this.state.showModal}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body className="brd">
                <h2>Tweetr</h2>
                <div className="full-img">
                <Image src={Tweet} className="gallery-img" alt="alt" responsive/>
                <p>A simple single-page AJAX-based Twitter clone. Stacks used were ES6 (client side JS), jQuery (Ajax), CSS3, HTML5, Git for version control and mongoDB for database.</p>
                <a href="https://github.com/madebymak/tweetr" target="blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
              </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Tweetr;
