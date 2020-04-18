import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors, Box, Button, Card, Image, Flex, Text} from '../Common';
import GoogleFormModal from './GoogleFormModal';

const HeroContainer = styled(Flex)`
  background-color: #fff;
  min-height: 420px;
  padding: 0 1rem;
  flex-direction: column;
  align-items: center;
`;

const HeroIntro = styled('p')`
  text-transform: uppercase;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.4);
  letter-spacing: 0.1em;
  font-weight: 400;
`;

const HeroHeading = styled('h1')`
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled('p')`
  font-size: 1.4rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

const ImageContainer = styled(Box)`
  @media (max-width: 880px) {
    display: none;
  }
`;

export const Hero = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openGoogleFormModal = () => setModalOpen(true);
  const closeGoogleFormModal = () => setModalOpen(false);

  return (
    <HeroContainer mb={4}>
      <Box
        width={1}
        style={{
          backgroundColor: '#f8f8f8',
          borderRadius: 4,
        }}
      >
        <Box
          style={{maxWidth: 920, margin: '0 auto', textAlign: 'center'}}
          width={1}
          px={4}
          pt={5}
          pb={[4, 5]}
        >
          <Box mb={3}>
            <motion.div
              initial={{opacity: 0, y: -8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, ease: 'easeOut'}}
            >
              <HeroIntro>Introducing SovPort</HeroIntro>
            </motion.div>
          </Box>

          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
          >
            <HeroHeading>
              The safety deposit box platform for the sovereign individual.
            </HeroHeading>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut', delay: 0.6}}
          >
            <Box mb={4} style={{maxWidth: 800, margin: '0 auto'}}>
              <HeroSubtitle>
                Remotely execute the opening of a safety deposit box in one of
                the world's leading financial hubs. Confidently manage your
                physical assets from anywhere in the world with a web based
                platform.
              </HeroSubtitle>
            </Box>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut', delay: 1.2}}
          >
            <Box mb={4}>
              <a href="mailto:daniel.burke11@gmail.com">
                <Button size="large" type="default" mx={1} width={160}>
                  Contact us
                </Button>
              </a>
              <Button
                size="large"
                type="primary"
                icon="arrow-right"
                mx={1}
                width={160}
                onClick={openGoogleFormModal}
              >
                Start now
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
      <GoogleFormModal visible={isModalOpen} onCancel={closeGoogleFormModal} />
    </HeroContainer>
  );
};

export default Hero;
