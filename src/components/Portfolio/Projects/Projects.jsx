import React from "react";

import "./Projects.css";

import { projectsData } from "./Data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="qualification__container container">
      <div className="qualification__item">
        <i class="uil uil-suitcase-alt qualification__icon"></i>
        <h3 className="qualification__title">Projects</h3>
      </div>

      <div className="project__container container grid">
        {projectsData.map((item) => {
          return <ProjectCard item={item} key={item.id} />;
        })}
        <div className="button__container">
          <a
            href="https://github.com/AniBukhrashvili?tab=repositories"
            className="button button--flex-center"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
