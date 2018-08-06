import React from "react";
import { Container, List } from "semantic-ui-react";

const Skills = () => {
  return (
    <div>
      <h1 class="skills-heading">Skills</h1>
      <Container>
        <List as="h1" className="skills-group" size="massive">
          <List.Item>Javascript</List.Item>
          <List.Item>React</List.Item>
          <List.Item>Redux</List.Item>
          <List.Item>ExpressJS</List.Item>
          <List.Item>PostgresQL</List.Item>
          <List.Item>NodeJS</List.Item>
          <List.Item>HTML5</List.Item>
          <List.Item>CSS3</List.Item>
          <List.Item>Material-Ui</List.Item>
          <List.Item>Semantic-Ui</List.Item>
          <List.Item>Git</List.Item>
          <List.Item>Mocha</List.Item>
          <List.Item>Chai</List.Item>
          <List.Item>Heroku</List.Item>
        </List>
      </Container>
      <div class="dots">
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
      </div>
    </div>
  );
};

export default Skills;
