import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container continer">
        <h2 className="footer__title">Ani</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/anibuxrashvilii/" target={"_blank"}>
            <i className="bx bxl-facebook-square footer__social-link"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ani-bukhrashvili-a5313622b/"
            target={"_blank"}
          >
            <i className="bx bxl-linkedin-square footer__social-link"></i>{" "}
          </a>

          <a href="https://github.com/AniBukhrashvili" target={"_blank"}>
            <i className="bx bxl-github footer__social-link"></i>{" "}
          </a>
        </div>
        <span className="footer__copy">&#169; Ani Bukhrashvili, 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
