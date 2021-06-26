import React from 'react';

import './Header.css';

const Header = (props) => {
  const handleHamburgerClick = () => {
    console.log(props.mobile);
    props.mobile ? props.onOpen() : () => {};
  };

  return (
    <header className="header">
      <div className="section-content-box header__contents">
        <nav className="header__menu-wrapper">
          <div className="header__logo-container">
            <div className="header__logo" />
            <div className="header__text">{props.logoText}</div>
          </div>
          <ul className="header__nav-container" onClick={handleHamburgerClick}>
            <li className="header__nav-link">Make a Booking</li>
            <li className="header__nav-link">Work With Us</li>
            <li className="header__nav-link">FAQ</li>
          </ul>
        </nav>
        <h1 className="header__title">{props.tagLine}</h1>
      </div>
    </header>
  );
};

export default Header;
