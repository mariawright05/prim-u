import React from 'react';
import Header from '../Header/Header';
import Customers from '../Customers/Customers';
import TreatYourself from '../TreatYourself/TreatYourself';
import More from '../More/More';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Customers />
      <TreatYourself />
      <More />
    </div>
  );
}

export default App;
