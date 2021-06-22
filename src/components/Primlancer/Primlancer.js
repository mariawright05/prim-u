import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './Primlancer.css';
import '../App/App.css';
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
    <section className="primlancer section-container">
      <div className="section-content-box primlancer__content">
        <h2 className="section-title">
          <span className="text-accent">primlancers </span>
          at work
        </h2>
        <div className="primlancer__video">
          <ReactPlayer
            url={data.primlancers[0].videoUrl}
            width="860px"
            height="449px"
            playing
            playIcon={<img src={play} className="primlancer__play-icon"></img>}
            light={data.primlancers[0].primlancerVideoPoster.url}
          />
          <h3 className="card-title_sm primlancer__video-title">{data.primlancers[0].videoTitle}</h3>
          <div className="overlay_dark primlancer__overlay" />
        </div>
        <button className="button button_accent">Book a Make Up</button>
      </div>
    </section>
  );
};

export default Providers;
