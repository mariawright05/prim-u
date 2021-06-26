import { printIntrospectionSchema } from 'graphql';
import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = (props) => {
  const [scrollDirection, setScrollDirection] = useState('');
  let lastScroll = 0;

  const listenScrollEvent = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setScrollDirection('');
      return;
    }

    if (currentScroll > lastScroll && scrollDirection !== 'scroll-down') {
      // down
      setScrollDirection('scroll-down');
    } else if (
      currentScroll < lastScroll &&
      scrollDirection === 'scroll-down'
    ) {
      // up
      setScrollDirection('scroll-up');
    }
    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <nav className={`navigation__menu-wrapper ${scrollDirection}`}>
      <div className="header__logo-container">
        <div className="header__logo" />
        <div className="header__logo_text">{props.logoText}</div>
      </div>
      <ul className="header__nav-container">
        <li className="header__nav-link">Make a Booking</li>
        <li className="header__nav-link">Work With Us</li>
        <li className="header__nav-link">FAQ</li>
      </ul>
    </nav>
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
