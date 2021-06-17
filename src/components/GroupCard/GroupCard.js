import React from 'react';
import './GroupCard.css';

const GroupCard = (props) => {
  const { event } = props;

  return (
    <li className="groupCard">
      <img
        className="groupCard__image"
        src={event.groupServiceImage.url}
        alt={event.groupService}
      />
      <h3 className="groupCard__title">{event.groupService}</h3>
      <p className="groupCard__text">{event.groupServiceDescription}</p>
      <button type="button" onClick={() => window.open(event.groupButtonLink)}>
        {event.groupButtonText}
      </button>
    </li>
  );
};

export default GroupCard;
