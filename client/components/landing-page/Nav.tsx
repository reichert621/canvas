import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors, Box, Button, Image, Flex, Text} from '../Common';
import GoogleFormModal from './GoogleFormModal';

const HeaderContainer = styled(Box)`
  background-color: #fff;
  z-index: 900;
`;

const Announcement = styled(Box)`
  background-color: ${colors.primary};
  color: ${colors.white};
  z-index: 900;
`;

export const Nav = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openGoogleFormModal = () => setModalOpen(true);
  const closeGoogleFormModal = () => setModalOpen(false);

  return (
    <React.Fragment>
      <Announcement>
        <Flex
          width={1}
          alignItems="center"
          mx="auto"
          px="1rem"
          py="1rem"
          justifyContent="center"
        >
          <Text fontWeight={400} mr={3}>
            Now accepting signups for beta users!
          </Text>
          <Button
            type="default"
            size="small"
            icon="arrow-right"
            ghost
            onClick={openGoogleFormModal}
          >
            Request early access
          </Button>
        </Flex>
      </Announcement>
      <HeaderContainer>
        <Flex
          width={1}
          alignItems="center"
          mx="auto"
          px="1rem"
          py="1rem"
          justifyContent="space-between"
        >
          <Link to="/home">
            <Image src="assets/logo-v2.svg" style={{height: 40, width: 40}} />
          </Link>

          <Box />
          <Button type="link" href="mailto:daniel.burke11@gmail.com">
            Questions? Contact us.
          </Button>
        </Flex>
      </HeaderContainer>
      <GoogleFormModal visible={isModalOpen} onCancel={closeGoogleFormModal} />
    </React.Fragment>
  );
};

export default Nav;
