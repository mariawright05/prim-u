import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import EventCard from '../EventCard/EventCard';
import './More.css';

const More = () => {
  const tempEvents = [
    {
      imageURL: (''),
      title: 'Weddings',
      description: 'After months of planning and preparation for your very special day, you and your team deserve to be pampered at your convenience. The Prim-U App will connect you to the right Prim-U Lancers and businesses to get you ready.'
    },
    {
      imageURL: (''),
      title: 'Group Bookings',
      description: 'Once you download the Prim-U App you instantly get connected to beauty specialists who can cater for large or small groups. From getting ready to Fashion shows, to spoiling your mom and her sisters . We connect U.'
    },
    {
      imageURL: (''),
      title: 'Corporate Events',
      description: 'Presentation is everything. First impressions last. Get connected to Professionals that can partner with you to get your team ready at that crucial time where it really matters the most. The first step would be to download the Prim-U App.'
    }
  ]

  return (
    <section className="more">
      <h1 className="more__title">For <span className="more__text-accent">More</span> Than Just U</h1>
      <ul className="more__list-wrapper">
        {tempEvents.map((event => <EventCard
          key={uuidv4()}
          event={event} />)
        )}
      </ul>
    </section>
  )
}

export default More;
