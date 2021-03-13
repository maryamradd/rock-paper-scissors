import React from "react";
import "../styles/header.scss";
import Logo from "../images/logo.svg";

export declare interface Props {
children: React.ReactNode;}

function Header({children} :Props) {
  return (
    <div className="header">
      <div className="group container-header">
        <img className="logo" src={Logo} alt="logo" />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Header;
