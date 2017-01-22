import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
      <Grid className="App brd">
        <Row className="brd">
          <Col className="brd content" xs={6}>
            <h1>Intro</h1>
          </Col>
          <Col className="brd content" xs={6}>
            <h1>Hello</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
