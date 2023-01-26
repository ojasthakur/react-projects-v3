import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((element) => {
          return (
            <li key={element.id}>
              <a href={element.href} className="footer-link">
                {element.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((element) => {
          return (
            <li key={element.id}>
              <a
                href={element.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={element.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
