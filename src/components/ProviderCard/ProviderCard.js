import React from 'react'
import './ProviderCard.css'

const ProviderCard = () => {
  console.log()
  return (
    <li className="providerCard">
      <div className="providerCard__image-wrapper">
        <img className="providerCard__image" src="#" alt="alt" />
        <h3 className="providerCard__title">Title</h3>
        <button type="button">Sign Up</button>
      </div>
      <p className="providerCard__text">text</p>
    </li>
  )
}

export default ProviderCard;
