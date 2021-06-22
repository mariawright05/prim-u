import React, { useRef } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import FaqCard from '../FaqCard/FaqCard';
import './FAQ.css';
import FaqSection from '../FaqSection/FaqSection';
const FAQ_QUERY_1 = gql`
  {
    faqs(where: { faqSubsection: ForCustomers }) {
      faqAnswer
      faqSubsection
      faqTitle
      id
    }
  }
`;

const FAQ_QUERY_2 = gql`
  {
    faqs(where: { faqSubsection: ForPartners }) {
      faqAnswer
      faqSubsection
      faqTitle
      id
    }
  }
`;

const Faq = () => {
  
  return (
    <section className="faq">
      <h1 className="section-title">
        Frequently asked <span className="text-accent">questions</span>
      </h1>
      <FaqSection name="For Customers" query={FAQ_QUERY_1} />
      <FaqSection name="For Partners" query={FAQ_QUERY_2} />
    </section>
  );
};

export default Faq;
