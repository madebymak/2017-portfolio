import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class App extends Component {
  render() {
    return (
        <Button className="email-btn closebtn"><Glyphicon glyph="envelope"/></Button>
    );
  }
}

export default App;
