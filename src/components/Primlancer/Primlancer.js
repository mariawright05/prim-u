import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './Primlancer.css';
import ReactPlayer from 'react-player/youtube';
import play from '../../images/Group 20.svg';

const PRIMLANCER_QUERY = gql`
  {
    primlancers {
      videoUrl
      videoTitle
      primlancerVideoPoster {
        url
      }
    }
  }
`;

const Providers = () => {
  const { loading, error, data } = useQuery(PRIMLANCER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <section className="primlancer">
      <h2 className="primlancer__title">
        <span className="primlancer__text-accent">primlancers</span>
        at work
      </h2>
      <div className="primlancer__video">
        <ReactPlayer
          url={data.primlancers[0].videoUrl}
          width="860px"
          height="449px"
          playing
          playIcon={<img src={play}></img>}
          light={data.primlancers[0].primlancerVideoPoster.url}
        />
      </div>
      <p>{data.primlancers[0].videoTitle}</p>
      <button>Book a Make Up</button>
    </section>
  );
};

export default Providers;
