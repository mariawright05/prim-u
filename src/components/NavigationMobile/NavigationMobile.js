import React from 'react';
import './NavigationMobile.css';

const NavigationMobile = (props) => {
  function handleClose() {
    props.onClose();
  }
  return (
    <div className={`mobile-menu ${props.isOpen ? '' : 'mobile-menu_hidden'}`}>
      <div className="mobile-menu__content">
        <button className="mobile-menu__close" onClick={handleClose}></button>
        <div className="mobile-menu__logo-container">
          <div className="mobile-menu__logo" />
          <div className="mobile-menu__logo_text">{props.logoText}</div>
        </div>
        <ul className="mobile-menu__nav-container">
          <li
            className="mobile-menu__nav-link"
            onClick= {
              () => {
                window.open('https://www.prim-u.app/en/list');
                handleClose();
              }
            }
          >
            Make a Booking
          </li>
          <li
            className="mobile-menu__nav-link"
            onClick={
              () => {
                window.open('https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer');
                handleClose();
              }
            }
          >
            Work With Us
          </li>
          <li className="mobile-menu__nav-link">
            <a className="mobile-menu__nav-link" href="#section_faq" onClick={handleClose}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavigationMobile;
