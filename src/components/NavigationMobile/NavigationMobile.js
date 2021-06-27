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
          <li
            className="mobile-menu__nav-link"
            onClick={() => window.open('https://www.prim-u.app/en/list')}
          >
            Make a Booking
          </li>
          <li
            className="mobile-menu__nav-link"
            onClick={() =>
              window.open(
                'https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer'
              )
            }
          >
            Work With Us
          </li>
          <a className="mobile-menu__nav-link" href="#section_faq">
            FAQ
          </a>
        </ul>
      </div>
    </div>
  );
};
export default NavigationMobile;
