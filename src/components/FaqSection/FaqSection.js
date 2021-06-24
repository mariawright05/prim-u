import React, { useRef } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import FaqCard from '../FaqCard/FaqCard';
import './FaqSection.css';

const FaqSection = ({ name, query }) => {
  const { loading, error, data } = useQuery(query);
  const [itemsToShow, setItemsToShow] = React.useState(10);
  const [expanded, setExpanded] = React.useState(false);

  const handleShowMore = () => {
    console.log(data.faqs.length);
    setExpanded(!expanded);
    if (!expanded) {
      setItemsToShow(data.faqs.length);
    } else {
      setItemsToShow(10);
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
      <button
        className="button button_lg faqSection__button"
        onClick={handleShowMore}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default FaqSection;
