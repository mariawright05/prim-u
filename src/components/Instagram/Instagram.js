import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './Instagram.css';

const INSTAGRAM_QUERY = gql`
  {
    instagrams {
      instagramButtonText
      instagramDescription
      instagramUrl
      instagramPicture {
        url
      }
    }
  }
`;

const Instagram = () => {
  const { loading, error, data } = useQuery(INSTAGRAM_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <section className="instagram">
      <h2 className="section-title ">
        We post interesting stuff on our
        <span className="text-accent"> instagram</span>
      </h2>

      <div
        className="instagram__image"
        style={{
          backgroundImage: `url(${data.instagrams[0].instagramPicture.url})`,
        }}
      ></div>
      <h3>{data.instagrams[0].instagramDescription}</h3>
      <button
        className="button button_lg"
        onClick={() => window.open(data.instagrams[0].instagramUrl)}
      >
        {data.instagrams[0].instagramButtonText}
      </button>
    </section>
  );
};

export default Instagram;
