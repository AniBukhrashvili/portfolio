import React from "react";

import Education from "./Education/Education";
import Projects from "./Projects/Projects";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <Education />
      <br />
      <br />
      <Projects />
    </section>
  );
}

export default Portfolio;
