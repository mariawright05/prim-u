import React from 'react'
import './ServiceCard.css'

const ServiceCard = (props) => {
  const { card } = props;

  return (
    <li className="serviceCard">
      <img className="serviceCard__image" src={card.imageURL} alt={card.service} />
      <h3 className="serviceCard__text">{card.service}</h3>
    </li>
  )
}

export default ServiceCard;
