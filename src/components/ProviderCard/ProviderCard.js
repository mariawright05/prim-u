import React from 'react';
import './ProviderCard.css';

const ProviderCard = ({ provider }) => (
  <li className="providerCard">
    <div
      className="providerCard__image-wrapper"
      style={{
        backgroundImage: `url(${provider.forProviderImage.url})`
      }}
    >
      <div className="providerCard__image-text">
        <h3 className="card-title_sm">{provider.forProviderTitle}</h3>
        <button
          type="button"
          className="button button_card"
          onClick={() => window.open(provider.forProviderButtonUrl)}
        >
          {provider.forProviderButtonText}
        </button>
      </div>
      <div className="overlay_dark" />
    </div>
    <p className="providerCard__body">{provider.forProviderDescription}</p>
  </li>
);

export default ProviderCard;
