import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Image from 'react-bootstrap/lib/Image';

import JournalPic from '../img/happy-journal.png';

class Journal extends Component {

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
              <Image src={JournalPic} alt="alt" responsive/>
            </div>

            <Modal dialogClassName="project-modal" backdrop="static" show={this.state.showModal}>
              <Modal.Header>
                {close}
              </Modal.Header>
              <Modal.Body className="brd">
                <h2>Happy Journal App</h2>
                <div className="full-img">
                <Image className="gallery-img" src={JournalPic} alt="alt" responsive/>
                <p>A journal entry app that ranks entries based on a user submitted sentiment score. Stacks used were React, NodeJS, ExpressJS and RethinkDB.</p>
                <a href="https://github.com/madebymak/react-rethinkdb-journal-2" target="blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
              </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Journal;
