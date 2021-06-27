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
            <li className="navigation__nav-link">Make a Booking</li>
            <li className="navigation__nav-link">Work With Us</li>
            <li className="navigation__nav-link">FAQ</li>
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

// const Navigation = () => {
//   const [navContents, setNavContents] = useState('header__navbar-contents');

//   const listenScrollEvent = () => {
//     if (window.scrollY < 73) {
//       return setNavContents('header__navbar-contents');
//     }
//     if (window.scrollY > 70) {
//       return setNavContents('header__navbar-contents_reverse');
//     }
//     return null;
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', listenScrollEvent);

//     return () => window.removeEventListener('scroll', listenScrollEvent);
//   }, []);

//   return (
//     <nav className={navContents}>
//       <div className="header__logo-container">
//         <div className="header__logo" />
//       </div>
//       <ul className="header__nav-container">
//         <li className="header__nav-link">Make a Booking</li>
//         <li className="header__nav-link">Work With Us</li>
//         <li className="header__nav-link">FAQ</li>
//       </ul>
//     </nav>
//   )
// }

export default Navigation;
