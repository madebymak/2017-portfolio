import React, { Component } from 'react';
import './Gallery.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Tweetr from './projects/tweetr.js';
import Chatty from './projects/chatty.js';
import WikiWhere from './projects/wiki-where.js'

class Gallery extends Component {

  render() {

    return (
      <Grid className="brd gallery">
        <Row className="brd">
          <Col className="brd gallery" xs={12} md={4}>
            <WikiWhere />
          </Col>

          <Col className="brd gallery" xs={12} md={4}>
            <Chatty />
          </Col>

          <Col className="brd gallery" xs={12} md={4}>
            <Tweetr />
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default Gallery;
