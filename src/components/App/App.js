import React from 'react';
import Header from '../Header/Header';
import Customers from '../Customers/Customers';
import Services from '../Services/Services';
import Group from '../Group/Group';
import Providers from '../Providers/Providers';
import PrimApp from '../PrimApp/PrimApp';
import Primlancer from '../Primlancer/Primlancer';
import Feedback from '../Feedback/Feedback';
import Products from '../Products/Products';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Customers />
      <Services />
      <Group />
      <Providers />
      <PrimApp />
      <Primlancer />
      <Feedback />
      <Products />
    </div>
  );
}

export default App;
