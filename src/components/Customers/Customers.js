import React from 'react';
import './Customers.css';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const CUSTOMERS_QUERY = gql`
  {
    forCustomers {
      button_text
      button_url
      section_title
      description_text {
        text
      }
      section_image {
        url
      }
    }
  }
`;

const Customers = () => {
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="customers">
      <div
        className="customers__content-box"
        style={{
          backgroundImage: `url(${data.forCustomers[0].section_image.url})`,
        }}
      >
        <div className="customers__content-container">
          <h2 className="customers__title">For Customers</h2>
          <div className="customers__row">
            <div className="customers__body-container">
              <p className="customers__body">
                {data.forCustomers[0].section_title}
              </p>
              <p className="customers__body">
                {data.forCustomers[0].description_text.text}
              </p>
            </div>
            <button
              type="button"
              className="customers__button"
              onClick={() => window.open(data.forCustomers[0].button_url)}
            >
              {data.forCustomers[0].button_text}
            </button>
          </div>
        </div>
        <div className="customers__dark-overlay" />
      </div>
    </section>
  );
};
export default Customers;
