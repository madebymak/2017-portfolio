import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Grid className="App brd">
        <Row className="brd">
          <Col className="brd content" xs={6}>
            <About/>
          </Col>
          <Col className="brd content" xs={6}>
            <div className="brd latest">
              <h1>Recent Projects</h1>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
