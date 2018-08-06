import React from "react";
import { Container, Image } from "semantic-ui-react";

const Intro = () => {
  return (
    <div id="home-container">
      <Container id="profile-pic-container">
        <Image id="profile-picture" src="jayprofile.png" alt="jay-profile" />
      </Container>
      <h1 class="intro-heading">Hello. I am Jay</h1>
      <div class="intro-group">
        <h3 class="intro-description">Software Engineer</h3>
        <h3 class="intro-description">Critical Thinker</h3>
        <h3 class="intro-description">React Freak</h3>
        <h3 class="intro-description">Krazy Drummer</h3>
        <div class="dots">
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
