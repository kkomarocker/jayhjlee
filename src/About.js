import React from "react";
import { Container, Header } from "semantic-ui-react";

const About = () => {
  return (
    <div>
      <Header className="about-heading" size="large">
        Who I am
      </Header>
      <Container textAlign="center">
        <p className="about-paragraph">
          Brilliant and passionate.
          <br />
          Self-learner and great team-player.
          <br />
          Open-minded and easy-going.
          <br />
          Problem-solver and hard-working.
          <br />
          Attention to detail and have keen eyes.
          <br />
          Playing drums for over two decades.
          <br />
          Looking for place to grow.
          <br />
          Positive.
        </p>
        <div class="dots">
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
        </div>
      </Container>
    </div>
  );
};

export default About;
