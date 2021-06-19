import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import './Feedback.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const REVIEWS_QUERY = gql`
  {
    reviews {
      id
      reviewStars
      reviewText
      reviewTitle
    }
  }
`;

const Feedback = () => {
  const [position, setPosition] = useState(0);
  const prev = () => {
    if (position > 0) setPosition((s) => --s);
  };
  const next = () => {
    console.log(`initial position ${position}`);
    if (position < data.reviews.length) setPosition((s) => ++s);
  };

  const { loading, error, data } = useQuery(REVIEWS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section className="feedback">
      <h1 className="feedback__heading">
        What our <span className="group__text-accent">customers </span> say
      </h1>
      <ul
        className="feedback__list-wrapper"
        style={{ marginLeft: -360 * position }}
      >
        {data.reviews.map((card) => (
          <FeedbackCard key={card.id} card={card} />
        ))}
      </ul>
      <ProgressBar
        items={data.reviews.length}
        prev={prev}
        next={next}
        position={position}
      />
    </section>
  );
};

export default Feedback;
