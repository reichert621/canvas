import * as React from 'react';
import styled from 'styled-components';
import first from 'lodash/first';
import {
  colors,
  Box,
  Button,
  DatePicker,
  Flex,
  Icon,
  Label,
  NumberInput,
  Radio,
  Text,
  TextArea,
  TextInput,
  Timeline,
} from '../Common';

const SideBar = styled('div')`
  position: fixed;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 240px;

  @media (max-width: 720px) {
    display: none;
    width: 0px;
  }
`;

const FormContainer = styled('div')`
  max-width: 640px;
  margin-left: 240px;

  @media (max-width: 720px) {
    max-width: 100%;
    margin-left: 0px;
  }
`;

const ErrorMessage = ({
  errors,
  visible,
}: {
  errors: Array<string>;
  visible: boolean;
}) => {
  return (
    <Text
      style={{
        visibility: errors.length && visible ? 'visible' : 'hidden',
      }}
      fontSize={12}
      color={colors.red}
      letterSpacing={0.2}
    >
      {first(errors) || <Text>&nbsp;</Text>}
    </Text>
  );
};

export const OnboardingForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={3}>
        <h3>Account Application</h3>

        <Box my={1} flex={1}>
          <Label htmlFor="full_name">Full name</Label>
          <TextInput
            id="full_name"
            name="full_name"
            type="text"
            placeholder="Alex McKenna"
          />
          <ErrorMessage errors={[]} visible={false} />
        </Box>

        <Box my={1} flex={1}>
          <Label htmlFor="email">Verify ID</Label>
          <Button width={1} type="default">
            Verify your identity
          </Button>
          <ErrorMessage errors={[]} visible={false} />
        </Box>

        <Box my={1} flex={1}>
          <Label htmlFor="address">Address</Label>
          <TextInput
            id="address"
            name="address"
            type="text"
            placeholder="135 West 4th St."
            mb={2}
          />
          <TextInput
            id="city"
            name="city"
            type="text"
            placeholder="New York, NY"
            mb={2}
          />
          <TextInput
            id="country"
            name="country"
            type="text"
            placeholder="United States"
            mb={2}
          />
          <Button width={1} type="default">
            Verify your address
          </Button>
          <ErrorMessage errors={[]} visible={false} />
        </Box>
      </Box>

      <Flex my={3}>
        <Button px={4} type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export const OnboardingPage = () => {
  return (
    <Box>
      <SideBar>
        <Box p={4}>Side bar</Box>
      </SideBar>
      <FormContainer>
        <Box px={5} py={4}>
          <OnboardingForm />
        </Box>
      </FormContainer>
    </Box>
  );
};

export default OnboardingPage;
