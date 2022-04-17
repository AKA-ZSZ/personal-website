import { StaticImage } from "gatsby-plugin-image";

import React from "react";
import "./aboutMe.scss";
export default function AboutMe() {
  return (
    <div id="about">
      <div className="container about-container">
        <div className="about-container-selfie">
          <StaticImage
            src="../../images/glitchSelfie.png"
            alt="Glitch Selfie"
          />
        </div>

        <div className="about-container-main">
          <h2>
            <span className="highlight">ABOUT ME</span>
          </h2>

          <p>
            I'm interested in web development and DevOps. As a Co-op student in
            British Columbia Institute of Technology, I completed a 8-month
            internship in 2021. Programming is not just a job for me but more
            like a lifestyle. I also like travelling, hiking, gaming and
            swimming.
          </p>
        </div>
      </div>
    </div>
  );
}
