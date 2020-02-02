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
  Timeline,
} from '../Common';

const SideBar = styled('div')`
  position: fixed;
  height: 100%;
  // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  // background-color: #fff;
  width: 240px;

  @media (max-width: 720px) {
    display: none;
    width: 0px;
  }
`;

const FormContainer = styled('div')`
  max-width: 720px;
  margin-left: 240px;

  @media (max-width: 720px) {
    max-width: 100%;
    margin-left: 0px;
  }
`;

const FormCard = styled(Card)`
  border-radius: 0px 0px 2px 2px;
  border-top: 3px solid ${colors.blue[3]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  background-color: ${colors.white};
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
    <FormCard p={4}>
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <h2>Account Application</h2>

          <Box my={1} flex={1}>
            <Label htmlFor="full_name">Full name</Label>
            <TextInput
              id="full_name"
              name="full_name"
              type="text"
              placeholder="Alex McKenna"
              size="large"
            />
            <ErrorMessage errors={[]} visible={false} />
          </Box>

          <Box my={1} flex={1}>
            <Label htmlFor="email">Verify your identity</Label>
            <Button width={1} type="default" size="large">
              Upload an ID document
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
              size="large"
              mb={2}
            />
            <TextInput
              id="city"
              name="city"
              type="text"
              placeholder="New York, NY"
              size="large"
              mb={2}
            />
            <TextInput
              id="country"
              name="country"
              type="text"
              placeholder="United States"
              size="large"
              mb={2}
            />
            <ErrorMessage errors={[]} visible={false} />
          </Box>

          <Box my={1} flex={1}>
            <Label htmlFor="email">Verify your address</Label>
            <Button width={1} type="default" size="large">
              Upload an address document
            </Button>
            <ErrorMessage errors={[]} visible={false} />
          </Box>
        </Box>

        <Flex my={3}>
          <Button
            width={1}
            px={4}
            type="primary"
            htmlType="submit"
            size="large"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </FormCard>
  );
};

export const OnboardingPage = () => {
  return (
    <Box>
      <SideBar>
        <Box p={4}>Side bar</Box>
      </SideBar>
      <FormContainer>
        <Box px={[3, 5]} py={4}>
          <OnboardingForm />
        </Box>
      </FormContainer>
    </Box>
  );
};

export default OnboardingPage;
