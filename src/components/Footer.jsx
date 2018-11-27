import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/image/logo_tiny.png';
import { LocalesContext } from './Context';

const nav_data = [
  { url: '/', label: 'HOME' },
  { url: '/projects', label: 'PROJECTS' },
  { url: '/contact', label: 'CONTACT' },
];

const Container = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  padding: 3rem 10%;
  box-sizing: border-box;
  background: #2a2e3e;
  transition: top 0.5s ease-out;
  z-index: 1;
  border-top: 1px dotted #1b1c23;

  @media only screen and (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const Copy = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  padding-top: 0.3rem;

  @media only screen and (max-width: 768px) {
    flex: 0;
    padding-right: 1rem;
  }

  & .txt {
    font-size: 0.8rem;
    color: white;

    @media only screen and (max-width: 768px) {
      display: none;
    }

    & .high {
      color: #15b6cd;
      padding: 0.1rem 0.5rem;
    }
  }

  & .fig {
    margin: 0.7rem 0 0;
    padding: 0;
    width: 50px;
  }
`;

const Section = styled.section`
  flex: 2;
  display: flex;
`;
const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const linkNav = css`
  color: white;
  font-size: 0.8rem;
  transition: color 600ms ease-in-out;
  margin-bottom: 0.5rem;

  &:hover {
    color: #15b6cd;
  }
`;

const LinkNav = styled(Link)`
  ${linkNav}
`;

const Contact = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-size: 0.8rem;
  color: white;
  margin-bottom: 0.6rem;
`;

const Text = styled.address`
  color: white;
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  const date = new Date().getFullYear();
  const LOCALES = useContext(LocalesContext);

  return (
    <Container>
      <Copy>
        <figure className='fig'>
          <img
            data-src={logo}
            alt='A blue lemon logo'
            className='lazyload'
            width='90%'
          />
        </figure>
        <p className='txt'>
          Copyright &copy; <mark className='high'>{LOCALES.APP_NAME}</mark>,{' '}
          {date}.
        </p>
      </Copy>
      <Section>
        <Nav>
          <Title>{LOCALES.FOOTER_NAVIGATION}</Title>
          {nav_data.map(n => (
            <LinkNav key={n.label} to={n.url}>
              {n.label}
            </LinkNav>
          ))}
        </Nav>
        <Contact>
          <Title>{LOCALES.FOOTER_OFFICE}</Title>
          <Text>
            {LOCALES.FOOTER_ADDRESS}
            <br />
            {LOCALES.FOOTER_PHONE}
            <br />
            E-Mail:
            <a href='mailto:carles@abluelemon.com'> carles@abluelemon.com</a>
          </Text>
        </Contact>
      </Section>
    </Container>
  );
};

export default Footer;
