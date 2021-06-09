import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [navContents, setNavContents] = useState("header__navbar-contents");

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setNavContents("header__navbar-contents");
    }
    if (window.scrollY > 70) {
      return setNavContents("header__navbar-contents_reverse");
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className="header">
      <div className="header__contents">
        <nav className={navContents}>
          <div className="header__logo-container">
            <div className="header__logo" />
            <div className="header__name">Prim-U</div>
          </div>
          <ul className="header__nav-container">
            <li className="header__nav-link">Make a Booking</li>
            <li className="header__nav-link">Work With Us</li>
            <li className="header__nav-link">FAQ</li>
          </ul>
        </nav>
      </div>
      <h1 className="header__title">Reinventing Beauty On Demand</h1>
    </header>
  )
};

export default Header;
