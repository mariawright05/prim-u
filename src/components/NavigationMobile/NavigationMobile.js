import React from 'react';
import './NavigationMobile.css';

const NavigationMobile = (props) => {
  console.log(props);

  function handleClose() {
    props.onClose();
  }
  return (
    <div className={`mobile-menu mobile-menu_${props.open ? '' : 'hidden'}`}>
      <div className="mobile-menu__content">
        <button className="mobile-menu__close" onClick={handleClose}></button>
        <div className="mobile-menu__logo-container">
          <div className="mobile-menu__logo" />
          <div className="mobile-menu__logo_text">{props.logoText}</div>
        </div>
        <ul className="mobile-menu__nav-container">
          <li className="mobile-menu__nav-link">Make a Booking</li>
          <li className="mobile-menu__nav-link">Work With Us</li>
          <li className="mobile-menu__nav-link">FAQ</li>
        </ul>
      </div>
    </div>
  );
};
export default NavigationMobile;
