import React from 'react';
import gql from 'graphql-tag';
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
    <section className="section-container faq">
      <div className="section-content-box">
        <h1 className="section-title">
          Frequently asked <span className="text-accent">questions</span>
        </h1>
        <FaqSection name="For Customers" query={FAQ_QUERY_1} />
        <div className="faq__spacer" />
        <FaqSection name="For Partners" query={FAQ_QUERY_2} />
      </div>
    </section>
  );
};

export default Faq;
