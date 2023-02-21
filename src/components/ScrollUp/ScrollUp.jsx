import React, { useEffect, useState } from "react";

import "./ScrollUp.css";

const ScrollUp = ({ handleScrollUp }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScroll && (
        <a href="#" className="scrollup" onClick={handleScrollUp}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      )}
    </>
  );
};

export default ScrollUp;
