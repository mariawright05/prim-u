import React from 'react';
import ProviderCard from '../ProviderCard/ProviderCard';
import './Services.css';

const Services = () => {
  console.log();
  return (
    <section className="services">  
      <h2 className="services__title">For Those Who Provide <span className="services__text-accent">Beauty Services</span></h2>
      <ul className="services__list-wrapper">
        <>
          <ProviderCard />
          <ProviderCard />
        </>
      </ul>
    </section>
  )
}

export default Services;