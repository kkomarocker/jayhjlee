import React from "react";
import { Container, Image, Header } from "semantic-ui-react";

const Intro = () => {
  return (
    <div>
      <Container id="profile-pic-container">
        <Image id="profile-picture" src="jayprofile.png" alt="jay-profile" />
      </Container>
      <Header className="home-heading" size="large">
        Hello. I am Jay
      </Header>
      <Header size="small" textAlign="center">
        <h3>Software Engineer</h3>
        <h3>Critical Thinker</h3>
        <h3>React Freak</h3>
        <h3>Krazy Drummer</h3>
        <div class="dots">
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
        </div>
      </Header>
    </div>
  );
};

export default Intro;
