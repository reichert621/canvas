import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import styled from 'styled-components';
import {colors, Box, Button, Image, Flex} from '../Common';
import Hero from './Hero';
import Nav from './Nav';

const Footer = styled(Box)`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 0.8125rem;
  line-height: 1.5384615384615385;
  font-weight: 400;
`;

export const LandingPage = (props: RouteComponentProps) => {
  return (
    <Flex bg="#fff" flexDirection="column" flex={1}>
      <Nav />

      <section style={{flex: 1}}>
        <Hero />
      </section>

      <footer>
        <Footer p={4}>© 2020 SovPort, Inc. All Rights Reserved</Footer>
      </footer>
    </Flex>
  );
};

export default LandingPage;
