import React from 'react';

const NavigationMobile = (props) => {
  function handleClose() {
    props.onClose();
  }
  return (
    <div
      className={`mobile-menu mobile-menu_${
        props.mobileMenuOpen ? '' : 'hidden'
      }`}
    >
      <div className="mobile-menu__content">
        <button className="mobile-menu__close" onClick={handleClose}></button>
      </div>
    </div>
  );
};
export default NavigationMobile;
