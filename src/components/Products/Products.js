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
  };
  const next = () => {
    console.log(`initial position ${position}`);
    if (position < data.products.length) setPosition((s) => ++s);
  };

  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section className="section-container">
      <div className="section-content-box section-content-box-large">
        <h1 className="section-title products__title">
          <span className="text-accent">Beauty products </span> for u
        </h1>
        <ul
          className="products__list-wrapper"
          style={{ marginLeft: -360 * position }}
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
      </div>
    </section>
  );
};

export default Products;
