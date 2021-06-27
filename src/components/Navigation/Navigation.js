import React, { useState, useEffect } from 'react';
import './Navigation.css';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

const Navigation = (props) => {
  const [scrollDirection, setScrollDirection] = useState('scroll-down');
  let lastScroll = 660;
  console.log(props);

  const listenScrollEvent = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll || currentScroll < 660) {
      setScrollDirection('scroll-down');
    } else if (currentScroll < lastScroll && currentScroll > 660) {
      setScrollDirection('scroll-up');
    }
    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleHamburgerClick = () => {
    props.onOpen();
  };
  
  return (
    <section className={`section-container navigation ${scrollDirection}`}>
      <nav className={`navigation__menu-wrapper ${scrollDirection}`}>
        <div className="navigation__logo-container">
          <div className="navigation__logo" />
          <div className="navigation__logo_text">{props.logoText}</div>
        </div>
        {!props.mobile ? (
          <ul className="navigation__nav-container">
            <li
              className="navigation__nav-link"
              onClick={() => window.open('https://www.prim-u.app/en/list')}
            >
              Make a Booking
            </li>
            <li
              className="navigation__nav-link"
              onClick={() =>
                window.open(
                  'https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer'
                )
              }
            >
              Work With Us
            </li>
            <a className="navigation__nav-link" href="#section_faq">
              FAQ
            </a>
          </ul>
        ) : (
          <div
            className="navigation__hamburger"
            onClick={handleHamburgerClick}
          ></div>
        )}
      </nav>
    </section>
  );
};

export default Navigation;
