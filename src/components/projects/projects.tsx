import React from "react";
import ProjectList from "../projectList/projectList";

import "./projects.scss";
const Project = () => {
  return (
    <div className="container projects-container">
      <div className="projects-container-main">
        <h1>Projects</h1>

        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
