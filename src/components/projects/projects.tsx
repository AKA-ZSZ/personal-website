import React from "react";
import ProjectList from "../projectList/projectList";

import "./projects.scss";
const Project = () => {
  return (
    <div id="projects">
      <div className="container projects-container">
        <h2>
          <span className="highlight">PROJECTS</span>
        </h2>

        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
