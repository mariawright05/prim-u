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
            <li
              className="header__nav-link"
              onClick={() => window.open('https://www.prim-u.app/en/list')}
            >
              Make a Booking
            </li>
            <li
              className="header__nav-link"
              onClick={() =>
                window.open(
                  'https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer'
                )
              }
            >
              Work With Us
            </li>
            <a className="header__nav-link" href="#section_faq">
              FAQ
            </a>
          </ul>
        </nav>
        <h1 className="header__title">{props.tagLine}</h1>
      </div>
    </header>
  );
};

export default Header;
