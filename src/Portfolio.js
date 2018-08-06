import React from "react";
import { Container, Item } from "semantic-ui-react";

const Portfolio = () => {
  return (
    <div>
      <h1 className="portfolio-heading">Portfolio</h1>
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Image
              src="./dimemain.png"
              size="small"
              style={{ margin: "0 5px 0 0" }}
            />
            <Item.Image src="./dimehistory.png" size="small" />
            <Item.Content verticalAlign="middle">
              <Item.Header>Dime</Item.Header>
              <Item.Meta>June 2018 | Front-End | Team Project</Item.Meta>
              <Item.Description>
                Personal mobile finance app, provides spending history and
                future budget prediction by image capture, text analyzing using
                DL.
                <div className="stack-group">
                  <img class="stack-icon" src="./js.jpg" alt="js" />
                  <img src="./reactnative.png" class="stack-icon" alt="react" />
                  <img src="./d3.jpg" class="stack-icon" alt="d3" />
                  <img src="./expo.png" class="stack-icon" alt="expo" />
                  <img
                    src="./googlecloud.jpg"
                    class="stack-icon"
                    alt="googlecloud"
                  />
                  <img src="./firebase.png" class="stack-icon" alt="firebase" />
                </div>
              </Item.Description>
              <Item.Extra>
                <div>
                  <a href="https://github.com/FourCents1804/Dime">
                    <img src="./github.png" alt="github-icon" />
                  </a>
                </div>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src="./facematch.png" size="medium" />
            <Item.Content verticalAlign="middle">
              <Item.Header>FaceMatch</Item.Header>
              <Item.Meta>June 2018 | Developer | Solo Project</Item.Meta>
              <Item.Description>
                SPA log-in web app validates user's facial image by AWS
                Rekognition incorporates with AWS S3
              </Item.Description>
              <div className="stack-group">
                <img src="./js.jpg" class="stack-icon" alt="js" />
                <img src="./reactnative.png" class="stack-icon" alt="react" />
                <img src="./s3.png" class="stack-icon" alt="s3" />
              </div>
              <Item.Extra>
                <a href="https://github.com/kkomarocker/Facer">
                  <img
                    src="./github.png"
                    href="https://github.com/kkomarocker/Facer"
                    alt="github-icon"
                  />
                </a>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src="./blog.png" size="medium" />
            <Item.Content verticalAlign="middle">
              <Item.Header>About Base64</Item.Header>
              <Item.Meta>June 2018 | Developer | Blog</Item.Meta>
              <Item.Description>
                My blog post which explains what is base64 and how I tackled
                during implementation
              </Item.Description>
              <Item.Extra>
                <a href="https://medium.com/@kkomarocker/about-base64-dd03f525f315">
                  <img
                    src="./medium.png"
                    class="github-img"
                    alt="medium-blog"
                  />
                </a>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div class="dots">
          <h2>.</h2>
          <h2>.</h2>
          <h2>.</h2>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
