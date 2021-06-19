import React from 'react';
import './GroupCard.css';

const GroupCard = (props) => {
  const { event } = props;

  return (
    <li className="groupCard">
      <div 
        className="groupCard__content-box"
        style={{
          backgroundImage: `url(${event.groupServiceImage.url})`,
        }}
      >
        <div className="groupCard__content-container">
          <h3 className="groupCard__title">{event.groupService}</h3>
          <div className="groupCard__row">
              <p className="groupCard__body">
                {event.groupServiceDescription}
              </p>
            <button
              type="button"
              className="groupCard__button"
              onClick={() => window.open(event.groupButtonLink)}
            >
              {event.groupButtonText}
            </button>
          </div>
        </div>
        <div className="groupCard__dark-overlay" />
      </div>
    </li>
  );
};

export default GroupCard;