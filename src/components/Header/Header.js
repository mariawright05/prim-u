import React from 'react';
import Navigation from '../Navigation/Navigation';
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${data.mains[0].pageHeaderImage.url})`,
      }}
    >
      <div className="section-content-box header__contents">
        <Navigation />
        <h1 className="header__title">{data.mains[0].pageTagline}</h1>
      </div>
    </header>
  );
};

export default Header;
