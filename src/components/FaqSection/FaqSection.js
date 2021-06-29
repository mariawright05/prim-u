import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import FaqCard from '../FaqCard/FaqCard';
import './FaqSection.css';

const FaqSection = ({ name, query, width }) => {
  const defaultItemNumber = 10;
  const { loading, error, data } = useQuery(query);
  const [itemsToShow, setItemsToShow] = useState(defaultItemNumber);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const itemNum = determineItemNumber(width);
    setItemsToShow(itemNum);
  }, [width]);

  const determineItemNumber = (w) => {
    if (w < 769) {
      return 5;
    } else {
      return defaultItemNumber;
    }
  };

  const handleShowMore = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setItemsToShow(data.faqs.length);
    } else {
      setItemsToShow(determineItemNumber(width));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h2 className="faqSection__header">{name}</h2>
      <ul className="faqSection_list-wrapper">
        {data.faqs.slice(0, itemsToShow).map((card) => (
          <FaqCard key={card.id} card={card} />
        ))}
      </ul>
      {itemsToShow <= data.faqs.length && (
        <button
          className="button button_lg button_faq-show-more"
          onClick={handleShowMore}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default FaqSection;
