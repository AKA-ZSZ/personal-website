import React from "react";
import "./projectList.scss";
import SingleProject from "../singleProject/singleProject";
import { graphql, useStaticQuery } from "gatsby";

// interface IProject {
//   title: string;
//   description: string;
//   url?: string;
//   img: string;
// }

// const Projects: Array<IProject> = [
//   {
//     title: "Movies Nominator",
//     description:
//       "Simple site to search for movies and nominate your favorites.",
//     img: "favMovieNomi",
//     url: "https://the-shoppies-shoptify-frontend.herokuapp.com/",
//   },
//   {
//     title: "Dungeon Survivor",
//     description: "Dungeon game powered by Pygame",
//     img: "dungeonGame",
//   },
//   {
//     title: "Smart Roster",
//     description:
//       "Shift scheduling and management platform app for nurses and medical workers",
//     img: "smartRoster",
//     url: "http://smart-roster-app.herokuapp.com/",
//   },
// ];

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "MDX/projects/" } }) {
        nodes {
          frontmatter {
            title
            project_image_alt
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
