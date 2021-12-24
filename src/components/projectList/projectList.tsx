import React from "react";
import "./projectList.scss";
import SingleProject from "../singleProject/singleProject";
import { graphql, useStaticQuery } from "gatsby";

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "MDX/projects/" } }) {
        nodes {
          frontmatter {
            title
            project_image_alt
            project_url
            project_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const projectsComponent = () => {
    return data.allMdx.nodes.map((node) => {
      const project = {
        title: node.frontmatter.title,
        description: node.frontmatter.project_image_alt,
        image: node.frontmatter.project_image,
        url: node.frontmatter.project_url,
      };
      console.error(project);
      return <SingleProject project={project} />;
    });
  };

  return (
    <div className="container projectList-container">{projectsComponent()}</div>
  );
};

export default ProjectList;
