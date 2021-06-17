import React from 'react';
import Header from '../Header/Header';
import Customers from '../Customers/Customers';
import Services from '../Services/Services';
import Group from '../Group/Group';
import Providers from '../Providers/Providers';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Customers />
      <Services />
      <Group />
      <Providers />
    </div>
  );
}

export default App;
