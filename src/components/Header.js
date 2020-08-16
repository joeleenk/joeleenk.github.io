import React from "react";
import Contact from "./Contact";
import MainNav from "./MainNav";

/**
 * Header component.
 *
 * @param {boolean} isPrinting Find out if we're printing.
 *
 * @returns header
 */
const Header = ({ isPrinting }) => (
  <header className="app-header">
    <h1>Joeleen Kennedy</h1>
    {isPrinting ? (
      <Contact />
    ) : (
      <p>
        a hybrid designer/frontend/UX/full stack developer who draws, paints, knits, and bakes
        sourdough
      </p>
    )}
    <MainNav />
  </header>
);
export default Header;
