import React from "react";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__box">
            <i class="uil uil-html5 skills__icon"></i>
            <h3 className="skills__title">HTML</h3>
          </div>

          <div className="skills__box">
            <i class="uil uil-css3-simple skills__icon"></i>
            <h3 className="skills__title">CSS</h3>
          </div>

          <div className="skills__box">
            <i class="uil uil-java-script skills__icon"></i>
            <h3 className="skills__title">JAVASCRIPT</h3>
          </div>

          <div className="skills__box">
            <i class="uil uil-react skills__icon"></i>
            <h3 className="skills__title">REACT</h3>
          </div>

          <div className="skills__box">
            <i class="uil uil-code-branch skills__icon"></i>
            <h3 className="skills__title">GIT</h3>
          </div>

          <div className="skills__box">
            <i class="uil uil-icons skills__icon"></i>
            <h3 className="skills__title">MATERIAL UI</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
