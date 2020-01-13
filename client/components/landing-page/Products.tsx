import React from 'react';
import styled from 'styled-components';
import {colors, Box, Button, Card, Heading, Flex, Input} from '../Common';

const ProductsContainer = styled(Flex)`
  max-width: 950px;
`;

const PreHeader = styled('p')`
  color: #6c7f87;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  line-height: 1.54;
  font-weight: 700;
`;

const H4 = styled('h4')`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled('p')`
  margin-left: 0;
  margin-right: 0;
  padding-top: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProductsCard = styled(Card)`
  background-color: #f4faff;
  border: 1px solid #d2d7dc;
  padding: 2rem;
  width: 100%;
  text-align: center;
`;

export const Products = () => {
  return (
    <ProductsContainer
      mt={['2rem', '4rem']}
      mx="auto"
      px={['1rem', '2rem']}
      pb="4rem"
      flexDirection="column"
    >
      <ProductsCard p={['1rem', '2rem']} mb="2rem">
        <PreHeader>Our products header</PreHeader>
        <H4>Find the best products to suit your needs.</H4>
        <Box>
          <Subtitle>
            Asset management &nbsp;|&nbsp; Quote requests &nbsp;|&nbsp; Loans
            &nbsp;|&nbsp; Liquidity
          </Subtitle>
        </Box>
      </ProductsCard>

      <Flex mb="2rem" justifyContent="center">
        <Button
          type="default"
          size="large"
          mr={3}
          href="mailto:reichertjalex@gmail.com"
        >
          Contact us
        </Button>
        <Button type="primary" size="large" mr={3} href="/login">
          Get started
        </Button>
      </Flex>
    </ProductsContainer>
  );
};

export default Products;
