import React from "react";
import logo from "../../images/breaking-bad-logo.png";
const Header = () => {
  return (
    <header className="center">
      <img src={logo} className="logo" alt="Breaking Bad Logo" />
    </header>
  );
};

export default Header;
