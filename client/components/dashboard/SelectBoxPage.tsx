import * as React from 'react';
import styled from 'styled-components';
import first from 'lodash/first';
import {
  colors,
  Box,
  Button,
  Card,
  DatePicker,
  Flex,
  Icon,
  Label,
  NumberInput,
  Radio,
  Text,
  TextArea,
  TextInput,
} from '../Common';

const Container = styled('div')`
  max-width: 1080px;
  min-width: 960px;

  // @media (max-width: 720px) {
  //   max-width: 100%;
  //   margin-left: 0px;
  // }
`;

const FormCard = styled(Card)`
  border-radius: 0px 0px 2px 2px;
  border-top: 3px solid ${colors.blue[3]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  background-color: ${colors.white};
`;

export const BoxOptionCard = ({box}: {box: any}) => {
  const {id, size, dimensions, image, description, price} = box;

  return (
    <FormCard p={4}>
      <Flex justifyContent="center">
        <Text mb={2} fontSize={2} fontWeight={500}>
          {size}
        </Text>
      </Flex>
      <Box mb={2}>
        <img src={image} style={{height: 200, maxWidth: '100%'}} />
      </Box>
      <Text fontSize={12}>{dimensions}</Text>
      <Text fontSize={12}>{description}</Text>

      <Text color={colors.primary} fontWeight={500} mt={3}>
        {price}
      </Text>
    </FormCard>
  );
};

export const SelectBoxPage = () => {
  const options = [
    {
      id: 1,
      size: 'Small',
      dimensions: '26.5cm X 41.3cm X 9.85cm',
      image: 'https://i.imgur.com/bng7mhF.jpg',
      description: 'Jewelry, hard drives, precious metals',
      price: '$5.00', // TODO
    },
    {
      id: 2,
      size: 'Medium',
      dimensions: '26.5cm X 41.3cm X 19.85cm',
      image: 'https://i.imgur.com/t8TpFtS.jpg',
      // description: 'Documents, memorabilia, precious metals, watches',
      description: 'Memorabilia, precious metals, watches',
      price: '$10.00', // TODO
    },
    {
      id: 3,
      size: 'Large',
      dimensions: '26.5cm X 41.3cm X 74.85cm',
      image: 'https://i.imgur.com/oFkgoze.jpg',
      // description: 'Wine, small art, precious metals, handbags, sneakers',
      description: 'Wine, small art, handbags, sneakers',
      price: '$20.00', // TODO
    },
  ];

  return (
    <Flex justifyContent="center">
      <Container>
        <Flex px={3} py={4} width={1}>
          {options.map(option => {
            return (
              <Box flex={1} mx={2}>
                <BoxOptionCard box={option} />
              </Box>
            );
          })}
        </Flex>
      </Container>
    </Flex>
  );
};

export default SelectBoxPage;
