import React, { useState } from "react";

function ProjectCard({ item }) {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (id) => {
    setToggleState(id === toggleState ? null : id);
  };

  return (
    <div className="project__content" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <span className="project__button" onClick={() => toggleTab(item.id)}>
        Read More
        <i className="uil uil-arrow-right project__button-icon"></i>
      </span>

      <div
        className={
          toggleState === item.id
            ? "project__modal active-modal"
            : "project__modal"
        }
      >
        <div className="project__modal-content">
          <i
            className="uil uil-times project__modal-close"
            onClick={() => toggleTab(item.id)}
          ></i>
          <h3 className="project__modal-title">{item.title}</h3>
          <div>
            <p className="section__subtitle">Description</p>
            <p className="project__modal-description"> {item.description}</p>
          </div>

          <div className="link__buttons">
            <a href={item.githubLink}>View code</a>
            <a href={item.livePreview}>Live Preview</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
