import React from "react";

import "./Education.css";

const Education = () => {
  return (
    <div className="qualification__container container">
      <div className="qualification__item">
        <i class="uil uil-graduation-cap qualification__icon"></i>
        <h3 className="qualification__title">Education</h3>
      </div>

      <div className="qualification__sections">
        <div className="qualification__content">
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">University</h3>
              <span className="qualification__subtitle">
                Business and Technology University
              </span>

              <div className="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2021 - Present
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">React Course</h3>
              <span className="qualification__subtitle">
                Tbilisi School of Communication
              </span>

              <div className="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2022 November - 2023 January
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
