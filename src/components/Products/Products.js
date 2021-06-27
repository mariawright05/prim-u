import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const PRODUCTS_QUERY = gql`
  {
    products {
      id
      productDescription
      productPrice
      productTitle
      productImage {
        url
      }
      productUrl
      productsButtonText
      productCurrency
    }
  }
`;

const Products = () => {
  const [position, setPosition] = useState(0);
  const prev = () => {
    if (position > 0) setPosition((s) => --s);
    console.log(position);
  };
  const next = () => {
    console.log(position);
    if (position <= data.products.length) setPosition((s) => ++s);
  };

  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section className="section-container products">
      <div className="section-content-box section-content-box-large">
        <h2 className="section-title products__title">
          <span className="text-accent">Beauty products </span> for u
        </h2>
        <ul
          className="products__list-wrapper"
          style={{ marginLeft: -324 * position }}
        >
          {data.products.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </ul>
        <ProgressBar
          items={data.products.length}
          prev={prev}
          next={next}
          position={position}
        />
        <div className="products__button-wrapper">
          <button id="products__button" className="button button_accent">
            Check out beauty products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
