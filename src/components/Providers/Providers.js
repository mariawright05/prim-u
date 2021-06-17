import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import ProviderCard from '../ProviderCard/ProviderCard';
import './Providers.css';

const PROVIDERS_QUERY = gql`
  {
    forProviders {
      forProviderTitle
      forProviderButtonUrl
      forProviderButtonText
      forProviderDescription
      forProviderImage {
        url
      }
    }
  }
`;

const Providers = () => {
  const { loading, error, data } = useQuery(PROVIDERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="providers">
      <h2 className="providers__title">
        For Those Who Provide{' '}
        <span className="providers__text-accent">Beauty Services</span>
      </h2>
      <ul className="providers__list-wrapper">
        {data.forProviders.map((provider) => (
          <ProviderCard key={provider.forProviderTitle} provider={provider} />
        ))}
      </ul>
    </section>
  );
};

export default Providers;
