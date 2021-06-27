import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Customers from '../Customers/Customers';
import Services from '../Services/Services';
import Group from '../Group/Group';
import Providers from '../Providers/Providers';
import PrimApp from '../PrimApp/PrimApp';
import Primlancer from '../Primlancer/Primlancer';
import Feedback from '../Feedback/Feedback';
import Products from '../Products/Products';
import Faq from '../FAQ/FAQ';
import Instagram from '../Instagram/Instagram';
import Footer from '../Footer/Footer';
import './App.css';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import Loader from '../Loader/Loader';

const MAIN_QUERY = gql`
  {
    mains {
      pageTagline
      pageTitle
    }
  }
`;

function App() {
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const breakpoint = 767;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    width <= breakpoint ? setMobile(true) : setMobile(false);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);

  function handleCloseMenu() {
    setMobileMenuOpen(false);
  }

  function handleOpenMenu() {
    console.log('click');
    setMobileMenuOpen(true);
  }

  const { loading, error, data } = useQuery(MAIN_QUERY);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;
  return (
    <div className="app">
      {mobile && (
        <NavigationMobile
          open={mobileMenuOpen}
          onClose={handleCloseMenu}
          logoText={data.mains[0].pageTitle}
        />
      )}
      <Navigation
        logoText={data.mains[0].pageTitle}
        mobile={mobile}
        onOpen={handleOpenMenu}
      />

      <Header
        mobile={mobile}
        onOpen={handleOpenMenu}
        onClose={handleCloseMenu}
        mobileMenuOpen={mobileMenuOpen}
        logoText={data.mains[0].pageTitle}
        tagLine={data.mains[0].pageTagline}
      />
      <Customers />
      <Services />
      <Group />
      <Providers />
      <PrimApp />
      <Primlancer />
      <Feedback />
      <Products />
      <Faq mobile={mobile} width={width} />

      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
