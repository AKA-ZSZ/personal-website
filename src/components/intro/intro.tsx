import React from "react";
import PrimaryButton from "../buttons/primaryButton";
import "./intro.scss";
export default function Intro() {
  const onNavigateToContact = () => {};
  return (
    <div id="intro">
      <div className="container intro-container">
        <h1>
          <span className="highlight">Zhentian</span> Zhang
        </h1>
        <p>
          Software Developer <span className="highlight">|</span> Currently
          based in <span className="highlight">Vancouver, Canada</span>{" "}
        </p>
        <PrimaryButton onClick={onNavigateToContact}>
          Contact with me
        </PrimaryButton>
      </div>
    </div>
  );
}
