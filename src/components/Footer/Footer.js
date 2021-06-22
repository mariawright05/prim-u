import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './Footer.css';

const FOOTER_QUERY = gql`
  {
    footers {
      footerAppLink
      footerEmail
      footerFacebook
      footerInstagram
      footerLinkedin
      footerPhone
      footerPrivacyLink
      footerTermsOfUseLink
      footerTwitter
      footerUserContentLink
      footerYoutube
    }
  }
`;

const Footer = () => {
  const { loading, error, data } = useQuery(FOOTER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="footer">
      <div className="footer__column-left">
        <h2 className="footer__heading ">PRIM-U APP © 2020</h2>
        <a href={data.footers[0].footerAppLink}>PRIM-U App</a>
        <a href={data.footers[0].footerUserContentLink}>
          Prim-U User Generated Content Policy
        </a>
        <a href={data.footers[0].footerTermsOfUseLink}>
          Prim-U Website Terms of Use
        </a>
      </div>
      <div className="footer__column-middle">
        <h2 className="footer__heading ">CONTACT US</h2>
        <p>{data.footers[0].footerTermsOfUseLink.footerEmail}</p>
        <p>{data.footers[0].footerTermsOfUseLink.footerPhone}</p>
      </div>
      <div className="footer__column-right">
        <h2 className="footer__heading ">FOLLOW US</h2>
        <a href={data.footers[0].footerTermsOfUseLink.footerFacebook}>
          Facebook
        </a>
        <a href={data.footers[0].footerTermsOfUseLink.footerTwitter}>Twitter</a>
        <a href={data.footers[0].footerTermsOfUseLink.footerLinkedin}>
          Linkedin
        </a>
        <a href={data.footers[0].footerTermsOfUseLink.footerYoutube}>Youtube</a>
        <a href={data.footers[0].footerTermsOfUseLink.footerInstagram}>
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Footer;
