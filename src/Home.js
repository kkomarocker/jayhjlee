import React, { Component } from "react";
import Intro from "./Intro";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="home-container">
          <Intro />
        </div>
        <div id="about-container">
          <About />
        </div>
        <div id="portfolio-container">
          <Portfolio />
        </div>
        <div id="skills-container">
          <Skills />
        </div>
        <div id="contact-container">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
