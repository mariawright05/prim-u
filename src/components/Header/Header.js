import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import './Header.css';

const MAIN_QUERY = gql`
  {
    mains {
      pageTagline
      pageTitle
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(MAIN_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <header className="header">
      <div className="section-content-box header__contents">
        <nav className="header__menu-wrapper">
          <div className="header__logo-container">
            <div className="header__logo" />
          </div>
          <ul className="header__nav-container">
            <li className="header__nav-link">Make a Booking</li>
            <li className="header__nav-link">Work With Us</li>
            <li className="header__nav-link">FAQ</li>
          </ul>
        </nav>
        <h1 className="header__title">{data.mains[0].pageTagline}</h1>
      </div>
    </header>
  );
};

export default Header;
