import React from 'react';
import './FeedbackCard.css';
import star from '../../images/Star 1.svg';

const FeedbackCard = ({ card }) => {
  const renderStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<img className="feedbackCard__star" src={star} alt="star icon" />);
    }
    return stars;
  };

  return (
    <li className="feedbackCard">
      <div className="feedbackCard__heading">
        <h3 className="feedbackCard__title">{card.reviewTitle} </h3>
        <div className="feedbackCard__stars">
          {renderStars(card.reviewStars)}
        </div>
      </div>
      <p className="feedbackCard__text">{card.reviewText}</p>
    </li>
  );
};

export default FeedbackCard;
