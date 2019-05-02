import React from "react";
import MainNav from "./MainNav";
// import logo from "../images/logo.svg";

const Header = () => (
  <header className="app-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>Joeleen Kennedy</h1>
    <p>Frontend Developer</p>
    <ul className="contact-me">
      <li className="print-only">Greensboro, NC</li>
      <li className="print-only">joeleen.net</li>
      <li>joeleenk@gmail.com</li>
      <li>386-453-6905</li>
    </ul>
    <MainNav />
  </header>
);
export default Header;
