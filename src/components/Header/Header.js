import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header className="header">
      <div className="header__contents">
        <nav className="header__navbar-contents">
          <img className="header__logo" src="" alt="" />
          <div className="header__title">Prim-U</div>
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

export default Header;
