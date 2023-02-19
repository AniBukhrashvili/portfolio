import React, { useState } from "react";
import "./Header.css";

import logo from "../../assets/logo.webp";

const Header = () => {
  const [menu, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <img src={logo} className="nav__ab" alt="LOGO" />

        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!menu)}
          ></i>
        </div>

        <nav className="nav__toggle" onClick={() => showMenu(!menu)}>
          <i className="uil uil-apps"></i>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
