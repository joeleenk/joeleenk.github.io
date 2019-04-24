import React from "react";
import MainNav from "./MainNav";
// import logo from "../images/logo.svg";

const Header = ({ isAuthenticated, onLogout }) => (
  <header className="app-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>Joeleen Kennedy</h1>
    <p>Frontend Developer</p>
    <MainNav />
  </header>
);
export default Header;
