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
        <Intro />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default Home;
