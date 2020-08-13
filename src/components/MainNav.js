import React from "react";

/**
 * Main nav component.
 *
 * @returns main nav
 */
const MainNav = () => (
  <nav className="app-main-nav">
    <ul>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#work">My Work</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);
export default MainNav;
