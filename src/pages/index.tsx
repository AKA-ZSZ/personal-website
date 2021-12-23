import React from "react";
import AboutMe from "../components/aboutMe/aboutMe";
import Intro from "../components/intro/intro";

import Layout from "../components/layout/layout";
import TechStack from "../components/techStack/techStack";
import Projects from "../components/projects/projects";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";
import Contact from "../components/contact/contact";

export default function Home() {
  return (
    <Layout>
      <div id="home">
        <Intro />
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
