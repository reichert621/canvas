import React from 'react';
import styled from 'styled-components';
import {colors, Box, Card, Heading, Flex} from '../Common';

const HeroContainer = styled(Flex)`
  background-color: #f4faff;
  min-height: 420px;
  padding-top: 96px;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 320px;
    padding-top: 64px;
  }
`;

const HeroHeading = styled('h1')`
  font-weight: 400;
  font-size: 3.3rem;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled('p')`
  font-size: 1.5rem;
  line-height: 1.33;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

const HeroSubheader = styled('h4')`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const CarriersContainer = styled(Flex)`
  // NB: This is just a hack to increase specificity
  && {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ProviderCard = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 4px 8px 0 rgba(108, 127, 135, 0.1),
    0 1px 4px 0 rgba(108, 127, 135, 0.36);
  margin-right: 1rem;
  height: 160px;
  width: 160px;
`;

const ProviderLogo = styled('img')`
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 56px;
  height: 56px;
`;

const CarrierLabel = styled('p')`
  font-size: 0.8125rem;
  line-height: 1.5384615384615385;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
`;

export const Hero = () => {
  // TODO: don't rely on these logo urls
  const providers = [
    {
      name: 'Option #1',
      logo: 'http://via.placeholder.com/50',
    },
    {
      name: 'Option #2',
      logo: 'http://via.placeholder.com/50',
    },
    {
      name: 'Option #3',
      logo: 'http://via.placeholder.com/50',
    },
    {
      name: 'Option #4',
      logo: 'http://via.placeholder.com/50',
    },
    {
      name: 'Option #5',
      logo: 'http://via.placeholder.com/50',
    },
  ];

  return (
    <Box>
      <HeroContainer>
        <Box>
          <HeroHeading>Main heading goes here.</HeroHeading>
          <HeroSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </HeroSubtitle>
        </Box>
      </HeroContainer>
      <CarriersContainer flexDirection="column" alignItems="center" mt={-136}>
        <HeroSubheader>
          Get services from our network of providers
        </HeroSubheader>
        <Flex>
          {providers.map(({name, logo}) => {
            return (
              <ProviderCard key={name}>
                <Box p="0.25rem" mt="0.25rem">
                  <ProviderLogo src={logo} />
                </Box>
                <CarrierLabel>{name}</CarrierLabel>
              </ProviderCard>
            );
          })}
        </Flex>
      </CarriersContainer>
    </Box>
  );
};

export default Hero;
