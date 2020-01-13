import React from 'react';
import styled from 'styled-components';
import {Box, Flex} from '../Common';

const ReasonsContainer = styled(Flex)`
  max-width: 1200px;
`;

const PreHeader = styled('p')`
  color: #6c7f87;
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

  @media (max-width: 970px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const H5 = styled('h5')`
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 970px) {
    font-size: 1.2rem;
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
`;

const ReasonsCopyContainer = styled('div')`
  flex: 1;
  padding-bottom: 4rem;
  padding-top: 4rem;
  padding-right: 2rem;
`;

const ReasonsImageContainer = styled('div')`
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ReasonsCopy = () => {
  return (
    <ReasonsCopyContainer>
      <PreHeader>Why us?</PreHeader>
      <H2>Subheader for this section</H2>

      <Box>
        <Box mb="1rem">
          <H5>Reason #1</H5>
          <Subtitle>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Subtitle>
        </Box>
        <Box mb="1rem">
          <H5>Reason #2</H5>
          <Subtitle>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </Subtitle>
        </Box>
        <Box mb="1rem">
          <H5>Reason #3</H5>
          <Subtitle>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </Subtitle>
        </Box>
      </Box>
    </ReasonsCopyContainer>
  );
};

const ReasonsImage = () => {
  return (
    <ReasonsImageContainer>
      <figure>
        <picture>
          <img
            alt="Reasons"
            src="https://via.placeholder.com/540x680"
            role="presentation"
          />
        </picture>
      </figure>
    </ReasonsImageContainer>
  );
};

const Reasons = () => {
  return (
    <ReasonsContainer my="2rem" mx="auto" px="2rem">
      <ReasonsCopy />
      <ReasonsImage />
    </ReasonsContainer>
  );
};

export default Reasons;
