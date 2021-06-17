import React from 'react';
import './ProviderCard.css';

const ProviderCard = ({ provider }) => (
  <li className="providerCard">
    <div className="providerCard__image-wrapper">
      <img
        className="providerCard__image"
        src={provider.forProviderImage.url}
        alt={provider.forProviderTitle}
      />
      <h3 className="providerCard__title">{provider.forProviderTitle}</h3>
      <button
        type="button"
        onClick={() => window.open(provider.forProviderButtonUrl)}
      >
        {provider.forProviderButtonText}
      </button>
    </div>
    <p className="providerCard__text">{provider.forProviderDescription}</p>
  </li>
);

export default ProviderCard;
