import "./naveBar.css";

import React from "react";
import { Link } from "react-scroll";

import logo from "../../assets/logoNomeboa.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link className="desktopManuListItem"> Home </Link>
          <Link className="desktopManuListItem">Sobre </Link>
          <Link className="desktopManuListItem">Portfolio </Link>
          <Link className="desktopManuListItem">Cliente </Link>
        </div>
        <button className="desktopMenuButton">
          Contato
        </button>
      </nav>
    </div>
  );
};
export default NavBar;
