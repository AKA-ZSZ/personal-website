import React from "react";
import AboutMe from "../components/aboutMe/aboutMe";
import Intro from "../components/intro/intro";

import Layout from "../components/layout/layout";
import TechStack from "../components/techStack/techStack";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";

export default function Home() {
  return (
    <Layout>
      <div id="home">
        <Intro />
        <AboutMe />
        <TechStack />
      </div>
    </Layout>
  );
}
