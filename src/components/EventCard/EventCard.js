import React from 'react'
import './EventCard.css'

const EventCard = (props) => {
  const { event } = props;

  return (
    <li className="eventCard">
      <img className="eventCard__image" src={event.imageURL} alt={event.title} />
      <h3 className="eventCard__title">{event.title}</h3>
      <p className="eventCard__text">{event.description}</p>
      <button type="button">Make a Booking</button>
    </li>
  )
}

export default EventCard;
