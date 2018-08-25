import React from "react";

const aphorisms = [
  "Let no one ever come to you without leaving better and happier",
  "Can miles truly separate you from firends if you want to be with someone you love, aren't you already there?",
  "Don't be dismayed at goodbyes, a farewell is necessary before you can meet again and meeting again, after moments or lifetimes, is certain for those who are friends",
  "Man's feelings are always purest and most glowing in the hour of meeting and of farewell"
];

const writer = [
  "Mother Teresa",
  "Richard Bach",
  "Richard Bach",
  "Johann Paul Friedrich Richter"
];

const pageLoad = () => {
  return Math.round(window.screenX);
};
const showAphorism = aphArr => {
  const idx = Math.floor(Math.random() * Math.floor(aphArr.length));
  return (
    <div class="aphorism">
      <div>{`"${aphorisms[idx]}"`}</div>
      <div>{`- ${writer[idx]} -`}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="contact-container" onLoad={() => pageLoad()}>
      <div class="contact-heading">Keep in touch!</div>
      <div class="contact-icon-group">
        <a href="https://github.com/kkomarocker">
          <img src="./githubskill.png" class="contact-icon" alt="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/jayhjlee/">
          <img src="./linkedin.png" class="contact-icon" alt="linkedin-icon" />
        </a>
        <a href="mailto:jayhjlee0319@gmail.com">
          <img src="./mail.png" class="contact-icon" alt="mail-icon" />
        </a>
        <a href="./Hyun_Jae_Jay_Lee_Resume_8-17.pdf" download>
          <img src="./resume.png" class="contact-icon" alt="resume-icon" />
        </a>
      </div>
      <div>{showAphorism(aphorisms)}</div>
    </div>
  );
};

export default Skills;
