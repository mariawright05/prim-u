import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './PrimApp.css';

const APP_QUERY = gql`
  {
    apps {
      appDescription {
        markdown
      }
      appLinkApple
      appLinkGoogle
      appButtonApple {
        url
      }
      appButtonGoogle {
        url
      }
      appImage {
        url
      }
      appTitle
    }
  }
`;

const PrimApp = () => {
  const { loading, error, data } = useQuery(APP_QUERY);

  function newLine(text) {
    return text.split('\n').map((str) => <p>{str}</p>);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="primApp section-container">
      <div className="section-content-box primApp__wrapper">
        <div className="primApp__text-wrapper">
          <h2 className="primApp__title">{data.apps[0].appTitle}</h2>
          <div className="primApp__description">
            {newLine(data.apps[0].appDescription.markdown)}
          </div>
          <ul className="primApp__links">
            <li
              className="primApp__link"
              style={{
                backgroundImage: `url(${data.apps[0].appButtonApple.url})`,
              }}
              onClick={() => window.open(data.apps[0].appLinkGoogle)}
            />
            <li
              className="primApp__link"
              style={{
                backgroundImage: `url(${data.apps[0].appButtonGoogle.url})`,
              }}
              onClick={() => window.open(data.apps[0].appLinkApple)}
            />
          </ul>
        </div>
        <div
          className="primApp__image"
          style={{ backgroundImage: `url(${data.apps[0].appImage.url})` }}
        ></div>
        </div>
    </section>
  );
};

export default PrimApp;
