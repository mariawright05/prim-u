import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const SERVICES_QUERY = gql`
  {
    services {
      serviceName
      serviceImage {
        url
      }
    }
  }
`;

const Services = () => {
  const { loading, error, data } = useQuery(SERVICES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="section-container services">
      <div className="section-content-box">
        <h2 id="services__title" className="section-title">
          Treat Yourself With{' '}
          <span className="text-accent">Our Services</span>
        </h2>
        <ul className="services__grid-wrapper">
          {data.services.map((card) => (
            <ServiceCard key={uuidv4()} card={card} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
