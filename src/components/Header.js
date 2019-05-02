import React from "react";
import MainNav from "./MainNav";
// import logo from "../images/logo.svg";

const Header = () => (
  <header className="app-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>Joeleen Kennedy</h1>
    <p>Frontend Developer</p>
    <ul className="contact-me">
      <li className="print-only">
        <a
          title="Map of Greensboro"
          href="https://goo.gl/maps/86h22PVTHJFBJF8S7"
        >
          Greensboro, NC
        </a>
      </li>
      <li className="print-only">
        <a title="Joeleen's website" href="https://joeleen.net/">
          joeleen.net
        </a>
      </li>
      <li>
        <a title="Email Joeleen" href="mailto:joeleenk@gmail.com">
          joeleenk@gmail.com
        </a>
      </li>
      <li>
        <a title="Call Joeleen" href="tel:13864536905">
          386-453-6905
        </a>
      </li>
    </ul>
    <MainNav />
  </header>
);
export default Header;
