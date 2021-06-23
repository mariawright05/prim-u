import React from 'react';
import './FaqCard.css';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';

const FaqCard = ({ card }) => {
  const [expanded, setExpanded] = React.useState(false);
  function newLine(text) {
    return text.split('\n').map((str) => <p>{str}</p>);
  }

  return (
    <li className="faqCard">
      <div className="faqCard__heading">
        <h3 className="faqCard__title">{card.faqTitle} </h3>
        <button
          className="faqCard__expand"
          style={
            expanded
              ? { backgroundImage: `url(${minus})` }
              : { backgroundImage: `url(${plus})` }
          }
          onClick={() => setExpanded(!expanded)}
        ></button>
      </div>
      {expanded && <p className="faqCard__text">{newLine(card.faqAnswer)}</p>}
    </li>
  );
};

export default FaqCard;
