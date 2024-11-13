import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mikks Garcia</h1>
        <span className="footer__copy">
          mikks.work@gmail.com
        </span>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/by_mikks/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer" 
            alt="Mikks' Instagram"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.tiktok.com/@by_mikks"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            alt="Mikks' Tiktok"
          >
            <i className="uil uil-music-note"></i>
          </a>

          <a
            href="https://www.facebook.com/mikksgarcia27"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            alt="Mikks' Facebook"
          >
            <i className="uil uil-facebook-f"></i>
          </a>

          <a
            href="https://www.raket.ph/by_mikks/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            alt="Mikks' Raket PH"
          >
            <i className="uil uil-rocket"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
