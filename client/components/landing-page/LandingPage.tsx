import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import styled from 'styled-components';
import {Box, Button, Image, Flex} from '../Common';
import Hero from './Hero';
import Tools from './Tools';
import Reasons from './Reasons';
import Products from './Products';

const NavTitle = styled('span')`
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
`;

const Header = styled(Flex)`
  background-color: #fff;
  border-bottom: 1px solid #d2d7dc;
  z-index: 900;
`;

const Footer = styled(Box)`
  background-color: #f5f6f7;
  font-size: 0.8125rem;
  line-height: 1.5384615384615385;
  font-weight: 400;
`;

export const LandingPage = (props: RouteComponentProps) => {
  return (
    <Box bg="#fff">
      <Header
        alignItems="center"
        px="1rem"
        py="0.5rem"
        justifyContent="space-between"
      >
        <NavTitle>Canvas</NavTitle>
        <Button type="primary" href="/login">
          Get started
        </Button>
      </Header>
      <section>
        <Hero />
      </section>
      <section>
        <Tools />
      </section>
      <section>
        <Reasons />
      </section>
      <section>
        <Products />
      </section>
      <footer>
        <Footer p={4}>© 2020 Canvas, Inc. All Rights Reserved</Footer>
      </footer>
    </Box>
  );
};

export default LandingPage;
