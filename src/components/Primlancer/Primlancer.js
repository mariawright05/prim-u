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
  const [playing, setPlaying] = React.useState(false);

  const { loading, error, data } = useQuery(PRIMLANCER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="primlancer section-container">
      <div className="primlancer__content-box">
        <h2 id="primlancer__section-title" className="section-title">
          <span className="text-accent">primlancers </span>
          at work
        </h2>
        <div className="primlancer__video-wrapper">
          <div className="primlancer__video">
            <ReactPlayer
              url={data.primlancers[0].videoUrl}
              // width="860px"
              // height="449px"
              width="100%"
              height="100%"
              playing
              onStart={() => {
                setPlaying(true);
              }}
              playIcon={<img src={play} className="primlancer__play-icon"></img>}
              light={data.primlancers[0].primlancerVideoPoster.url}
            />
            <h3
              id="primlancer__video-title"
              className={
                playing
                  ? 'primlancer__video-title_hidden'
                  : 'card-title_sm'
              }
            >
              {data.primlancers[0].videoTitle}
            </h3>
            <div className={playing ? '' : 'overlay_dark primlancer__overlay'} />
          </div>
        </div>
        <button id="primlancer__button" className="button button_accent">Book a Make Up</button>
      </div>
    </section>
  );
};

export default Providers;
