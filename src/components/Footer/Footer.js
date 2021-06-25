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
    <footer className="footer">
      <div className="section-content-box footer__content">
        <div className="footer__column_lg">
          <h2 className="footer__heading ">PRIM-U APP © 2020</h2>
          <a className="footer__link" href={data.footers[0].footerAppLink}>
            PRIM-U App
          </a>
          <a className="footer__link" href={data.footers[0].footerPrivacyLink}>
            Prim-U Privacy Policy
          </a>
          <a
            className="footer__link"
            href={data.footers[0].footerUserContentLink}
          >
            Prim-U User Generated Content Policy
          </a>
          <a
            className="footer__link"
            href={data.footers[0].footerTermsOfUseLink}
          >
            Prim-U Website Terms of Use
          </a>
        </div>
        <div className="footer__column_sm">
          <h2 className="footer__heading ">CONTACT US</h2>
          <p className="footer__link">{data.footers[0].footerEmail}</p>
          <p className="footer__link">{data.footers[0].footerPhone}</p>
        </div>
        <div className="footer__column_sm">
          <h2 className="footer__heading ">FOLLOW US</h2>
          <a className="footer__link" href={data.footers[0].footerFacebook}>
            Facebook
          </a>
          <a className="footer__link" href={data.footers[0].footerTwitter}>
            Twitter
          </a>
          <a className="footer__link" href={data.footers[0].footerLinkedin}>
            Linkedin
          </a>
          <a className="footer__link" href={data.footers[0].footerYoutube}>
            Youtube
          </a>
          <a className="footer__link" href={data.footers[0].footerInstagram}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
