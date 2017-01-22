import React, { Component } from 'react';
import Jacky from './IMG_3137.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App brd">
        <div className="brd">
          {/* <img src={Jacky}></img> */}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
