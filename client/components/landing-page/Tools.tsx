import React from 'react';
import styled from 'styled-components';
import qs from 'query-string';
import {Box, Button, Flex, Input, TextInput} from '../Common';

const ToolsContainer = styled(Flex)`
  max-width: 1200px;
`;

const PreHeader = styled('p')`
  color: #6c7f87;
  padding-top: 4rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  line-height: 1.54;
  font-weight: 700;
`;

const H2 = styled('h2')`
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 1.166;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

const Subtitle = styled('p')`
  margin-left: 0;
  margin-right: 0;
  padding-top: 0;
  max-width: 782px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageContainer = styled(Box)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Tools = () => {
  return (
    <ToolsContainer my="2rem" mx="auto" px={[0, '2rem']}>
      <ImageContainer width={[0, 316]} p={2}>
        <img style={{width: '100%'}} src="https://via.placeholder.com/300" />
      </ImageContainer>
      <Flex
        flexDirection="column"
        justifyContent="center"
        pb={['2rem', '4rem']}
        mx="2rem"
        flex={1}
      >
        <Box width={['100%', 670]}>
          <PreHeader>Section #2</PreHeader>
          <H2>Subheader for this section</H2>
          <Subtitle>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam.
          </Subtitle>
        </Box>
      </Flex>
    </ToolsContainer>
  );
};

export default Tools;
