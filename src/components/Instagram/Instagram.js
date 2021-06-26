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

  return (
    <section className="section-container instagram">
      <div className="section-content-box instagram__content-box">
        <div className="instagram__image-wrapper">
          <div
            className="instagram__image"
            style={{
              backgroundImage: `url(${data.instagrams[0].instagramPicture.url})`,
            }}
          />
        </div>
        <div className="instagram__text-wrapper">
          <h2 className="section-title instagram__title">
            We post interesting stuff on our
            <span className="text-accent"> instagram</span>
          </h2>
          <p className="instagram__body">{data.instagrams[0].instagramDescription}</p>
          <button
            className="button button_lg"
            onClick={() => window.open(data.instagrams[0].instagramUrl)}
          >
            {data.instagrams[0].instagramButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
