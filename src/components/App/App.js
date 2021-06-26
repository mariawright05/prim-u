import React from 'react';
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

const MAIN_QUERY = gql`
  {
    mains {
      pageTagline
      pageTitle
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(MAIN_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="app">
      <Navigation logoText={data.mains[0].pageTitle} />
      <Header logoText={data.mains[0].pageTitle} tagLine= {data.mains[0].pageTagline}/>
      <Customers />
      <Services />
      <Group />
      <Providers />
      <PrimApp />
      <Primlancer />
      <Feedback />
      <Products />
      <Faq />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
