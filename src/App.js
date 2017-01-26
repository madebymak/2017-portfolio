import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import About from './About.js';
import Projects from './Projects.js';
// import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <Grid className="App brd">
        <Row className="brd">
          <Col className="brd content" xs={6}>
            {/* <Header/> */}
            <About/>
          </Col>
          <Col className="brd content" xs={6}>
            <Projects/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
