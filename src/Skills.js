import React from "react";
import { Container } from "semantic-ui-react";

const Skills = () => {
  return (
    <div id="skills-container">
      <Container>
        <div class="skills-heading">Skills</div>
        <ul class="skills-group">
          <li class="skill">Javascript</li>
          <li class="skill">React</li>
          <li class="skill">Redux</li>
          <li class="skill">ExpressJS</li>
          <li class="skill">PostgresQL</li>
          <li class="skill">NodeJS</li>
          <li class="skill">HTML5</li>
          <li class="skill">CSS3</li>
          <li class="skill">Material-Ui</li>
          <li class="skill">Semantic-Ui</li>
          <li class="skill">Git</li>
          <li class="skill">Mocha</li>
          <li class="skill">Chai</li>
          <li class="skill">Heroku</li>
        </ul>
        <div class="dots">
          <h2>.</h2>
          <h2>.</h2>
          <h2>.</h2>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
