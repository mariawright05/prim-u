import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({card}) => (
    <li className="serviceCard">
      <img className="serviceCard serviceCard__image" src={card.serviceImage.url} alt={card.serviceName} />
      <h3 className="serviceCard__text">{card.serviceName}</h3>
    </li>
  )

export default ServiceCard;
