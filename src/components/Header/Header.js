import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// import { NavLink } from 'react-router-dom';
import './Header.css';

const MAIN_QUERY = gql`
  {
    mains {
      pageTagline
      pageTitle
      pageHeaderImage {
        url
      }
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(MAIN_QUERY);

  const [navContents, setNavContents] = useState('header__navbar-contents');

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setNavContents('header__navbar-contents');
    }
    if (window.scrollY > 70) {
      return setNavContents('header__navbar-contents_reverse');
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${data.mains[0].pageHeaderImage.url})`,
      }}
    >
      <div className="header__contents">
        <nav className={navContents}>
          <div className="header__logo-container">
            <div className="header__logo" />
            {/* <div className="header__name">{data.mains[0].pageTitle}</div> */}
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
