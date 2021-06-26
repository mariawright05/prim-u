import React from 'react';
import './ProviderCard.css';

const ProviderCard = ({ provider }) => {
  function newLine(text) {
    return text.split('\\n').map((str) => <p>{str}</p>);
  }

  return (
    <li className="providerCard">
      <div className="providerCard__image-wrapper">
        <div className="providerCard__image"
          style={{
            backgroundImage: `url(${provider.forProviderImage.url})`,
          }}
        />
        <div className="providerCard__image-text">
          <h3 className="card-title_sm">{provider.forProviderTitle}</h3>
          <button
            type="button"
            id="providerCard__button"
            className="button button_card"
            onClick={() => window.open(provider.forProviderButtonUrl)}
          >
            {provider.forProviderButtonText}
          </button>
        </div>
        <div className="overlay_dark" />
      </div>
      <p className="providerCard__body">
        {newLine(provider.forProviderDescription.text)}
      </p>
    </li>
  );
};
export default ProviderCard;
