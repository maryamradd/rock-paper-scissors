import React from "react";
import "../styles/header.css";
import Logo from "../images/logo.svg";

function Header(props) {
  return (
    <div className="header">
      <div className="group container-header">
        <img className="logo" src={Logo} alt="logo" />
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Header;
