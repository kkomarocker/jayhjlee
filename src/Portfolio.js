import React from "react";
import { Container } from "semantic-ui-react";

const Portfolio = () => {
  return (
    <div id="portfolio-container">
      <div class="portfolio-heading">Portfolio</div>
      <div class="dime-img-group">
        <div>
          <img src="./dimemain.png" class="dime-img" alt="dime-img1" />
        </div>
        <div>
          <img src="./dimehistory.png" class="dime-img" alt="dime-img2" />
        </div>
      </div>
      <div>
        <div class="dime-heading">Dime</div>
        <div class="dime-meta">June 2018 | Front-End | Team Project</div>
        <div class="dime-description">
          <p>
            Personal mobile finance app provides spending history and <br />future
            budget prediction by image capture and text analyzing using DL.
          </p>
        </div>
        <div class="stack-group">
          <img class="stack-icon" src="./js.jpg" alt="js" />
          <img src="./reactnative.png" class="stack-icon" alt="react" />
          <img src="./d3.jpg" class="stack-icon" alt="d3" />
          <img src="./expo.png" class="stack-icon" alt="expo" />
          <img src="./googlecloud.jpg" class="stack-icon" alt="googlecloud" />
          <img src="./firebase.png" class="stack-icon" alt="firebase" />
        </div>
        <div class="link-icon">
          <a href="https://github.com/FourCents1804/Dime">
            <img src="./github.png" alt="github-icon" />
          </a>
        </div>
      </div>
      <hr class="divider" />
      <div class="dime-img-group">
        <div>
          <img src="./facematch.png" class="dime-img" alt="dime-img1" />
        </div>
      </div>
      <div>
        <div class="dime-heading">FaceMatch</div>
        <div class="dime-meta">June 2018 | Developer | Solo Project</div>
        <div class="dime-description">
          <p>
            SPA log-in web app validates user's facial image by AWS Rekognition{" "}
            <br />incorporates with AWS S3.
          </p>
        </div>
        <div class="stack-group">
          <img src="./js.jpg" class="stack-icon" alt="js" />
          <img src="./reactnative.png" class="stack-icon" alt="react" />
          <img src="./s3.png" class="stack-icon" alt="s3" />
        </div>
        <div class="link-icon">
          <a href="https://github.com/kkomarocker/Facer">
            <img src="./github.png" alt="github-icon" />
          </a>
        </div>
      </div>
      <hr class="divider" />
      <div class="dime-img-group">
        <div>
          <img src="./blog.png" class="dime-img" alt="dime-img1" />
        </div>
      </div>
      <div>
        <div class="dime-heading">About Base64</div>
        <div class="dime-meta">June 2018 | Developer | Blog</div>
        <div class="dime-description">
          <p>
            My blog post which explains what is base64 and how I tackled<br />
            during implementation.
          </p>
        </div>
        <div class="link-icon">
          <a href="https://medium.com/@kkomarocker/about-base64-dd03f525f315">
            <img src="./medium.png" class="github-img" alt="medium-blog" />
          </a>
        </div>
      </div>
      <div class="dots">
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2>
      </div>
    </div>
  );
};

export default Portfolio;
