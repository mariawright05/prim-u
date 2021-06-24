import React from 'react';
import './ProductCard.css';

const ProductCard = ({ card }) => {
  return (
    <li className="productCard">
      <img
        className="productImage"
        src={card.productImage.url}
        alt={card.productTitle}
      />
      <div className="productCard__content">
        <h3 className="productCard__title">{card.productTitle} </h3>
        <p className="productCard__text">{card.productDescription}</p>
        <div className="productCard__price">
          {card.productCurrency}
          {card.productPrice}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
