import React from "react";
import PrimaryButton from "../buttons/primaryButton";
import "./intro.scss";
export default function Intro() {
  return (
    <div className="intro">
      <h1>Zhentian Zhang</h1>
      <p>Hi I am a software developer.</p>
      <PrimaryButton>Contact with me</PrimaryButton>
    </div>
  );
}