import React from 'react';
import './Customers.css';

const Customers = () => (
  <div className="customers">
    <div className="customers__image-container">
      <div className="customers__content-container">
        <h2 className="customers__title">For Customers</h2>
        <div className="customers__row">
          <div className="customers__text-container">
            <p className="customers__text">Enjoy beauty treatments wherever U are</p>
            <p className="customers__text">Struggling to find the time to pamper yourself? 
With just one click, Prim-U will connect U to the right primlancer, at the right time, right in the comfort of your home. 
On holiday? Book an expert primlancer closest to U. 
Simply click, pick a treatment and we’ll come to U.</p>
          </div>
          <button type="button" className="customers__button">Make a Booking</button>
        </div>
      </div>
    </div>
  </div>
  )

export default Customers;
