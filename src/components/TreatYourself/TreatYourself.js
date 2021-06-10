import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ServiceCard from '../ServiceCard/ServiceCard';
import './TreatYourself.css';

const TreatYourself = () => {
  const tempCards = [
    {
      imageURL: ('../../images/service-massage.png'),
      service: 'Massage'
    },
    {
      imageURL: ('../../images/service-waxing.png'),
      service: 'Waxing'
    },
    {
      imageURL: ('../../images/service-makeup.png'),
      service: 'Make Up'
    },
    {
      imageURL: ('../../images/service-manicure.png'),
      service: 'Manicure'
    },
    {
      imageURL: ('../../images/service-hair.png'),
      service: 'Hair'
    },
    {
      imageURL: ('../../images/service-male.png'),
      service: 'Male Grooming'
    },
  ]

  return (
    <section className="treat">
      <h2 className="treat__title">Treat Yourself With <span className="treat__text-accent">Our Services</span></h2>
      <ul className="treat__grid-wrapper">
        {tempCards.map((card) => <ServiceCard
          key={uuidv4()}
          card={card} />
        )}
      </ul>
    </section>
  )
}

export default TreatYourself;
