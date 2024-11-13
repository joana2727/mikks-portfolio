import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/by_mikks/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        alt="Mikks' Instagram Account"
        aria-label="View Mikks' Instagram Account Profile"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.tiktok.com/@by_mikks"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        alt="Mikks' Tiktok Account"
        aria-label="View Mikks' Tiktok Account Profile"
      >
        <i className="uil uil-music-note"></i>
      </a>

      <a
        href="https://www.facebook.com/mikksgarcia27"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        alt="Mikks' Facebook Account"
        aria-label="View Mikks' Facebook Account Profile"
      >
        <i className="uil uil-facebook-f"></i>
      </a>

      <a
        href="https://www.raket.ph/by_mikks/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
        alt="Mikks' Raket PH Account"
        aria-label="View Mikks' Raket PH Profile"
      >
        <i className="uil uil-rocket"></i>
      </a>
    </div>
  );
};

export default Social;
