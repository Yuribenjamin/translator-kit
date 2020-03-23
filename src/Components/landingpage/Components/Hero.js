import React from 'react';
import styled, { keyframes } from 'styled-components';
import translatorkit from '../../assets/img/translatorkit.svg';
import heart from '../../assets/img/heart.svg';

const Container = styled.section``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 40em;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0 0;
`;
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const Logo = styled.img`
  width: 3em;
  height: 3em;
  animation: ${rotate} 10s linear infinite;
`;
const HeartBeat = keyframes`
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;
const Heart = styled.img`
  width: 1em;
  height: 1em;
  padding: 0 0.2em 0 0.2em;
  animation: ${HeartBeat} 1s linear infinite;
`;
const P = styled.p`
  color: ${props => props.theme.colors.secondry};
  font-size: 1.5em;
`;
const H1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 4em;
`;
const H5 = styled.h5`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 6em;
  font-weight: 400;
  font-size: 0.938em;
`;
const Button = styled.a`
  padding: 0.938em 2.5em;
  border-radius: 2.5em;
  box-shadow: 0px 1px 8px 1px;
  cursor: pointer;
`;
const Footer = styled.footer`
  display: flex;

  justify-content: center;
`;
const Link = styled.a`
  background: none;
  text-transform: none;
`;
const Hero = () => {
  return (
    <Container role="main">
      <Header>
        <Logo src={translatorkit} alt="translator kit logo" />
        <P>Translator Kit</P>
      </Header>
      <Section>
        <H1>Welcome To Translator Kit</H1>
        <H5>
          Translator kit is a free editor for translators, for anyone need
          double editor. start typing now
        </H5>
        <Button>Wanna Try</Button>
      </Section>
      <Footer>
        Made with
        <Heart src={heart} alt="heart logo" />
        <Link href="https://twitter.com/AbrahamRagab">Ibrahim Ragab</Link>
      </Footer>
    </Container>
  );
};

export default Hero;
