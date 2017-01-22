import React, { Component } from 'react';
import './About.css';

class About extends Component {

  open() {
    document.getElementById("about").style.width = "100%";
    document.getElementById("bio-text").style.display = "none";
    document.getElementById("greet").style.backgroundColor = "transparent";
  };

  close() {
    document.getElementById("about").style.width = "0%";
    document.getElementById("bio-text").style.display = "block";
    document.getElementById("greet").style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  };

  render() {

    const bio = (
      <div className="bio overlay" id="about">
        <button className="closebtn" onClick={this.close}>Close</button>
        <h2>A Little About Me</h2>
				<p>I am a freelance web developer and web designer living in London, UK. I started freelancing in 2009 and have worked for a wide range of personal clients and agencies.</p>
				<p>I offer a complete web solution to my clients. I can guide you through the early stages of project planning and research, help you with information architecture and user experience, design your website, and finally build the site for you.</p>
      </div>
    )

    return (
      <div className="greet" id="greet">
        <div className="about-menu" onClick={this.open}>
          <div className="brd" id="bio-text">
            <h1>Hi, my name is Jacky.</h1>
          </div>
        </div>
        {bio}
      </div>
    );
  }
}

export default About;
