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
import * as Assets from '../../api/assets';

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
  const [assetValue, setAssetValue] = React.useState(null);
  const [purchaseDate, setPurchaseDate] = React.useState(null);
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({
      description,
      value: assetValue,
      purchased_at: purchaseDate,
    });
    Assets.create({
      description,
      value: assetValue,
      purchased_at: purchaseDate,
    })
      .then(result => console.log('Success!', result))
      .catch(err => console.log('Error!', err));
  };

  return (
    <FormCard p={4}>
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <h2>Register an asset</h2>

          <Flex mx={-1}>
            <Box m={1} flex={1}>
              <Label htmlFor="value">Value in USD</Label>
              <NumberInput
                style={{width: '100%'}}
                id="value"
                name="value"
                placeholder="1000"
                size="large"
                value={assetValue}
                onChange={setAssetValue}
              />
              <ErrorMessage errors={[]} visible={false} />
            </Box>

            <Box m={1} flex={1}>
              <Label htmlFor="date_of_purchase">Date of purchase</Label>
              <DatePicker
                style={{width: '100%'}}
                id="date_of_purchase"
                name="date_of_purchase"
                size="large"
                value={purchaseDate}
                allowClear={false}
                onChange={setPurchaseDate}
              />
              <ErrorMessage errors={[]} visible={false} />
            </Box>
          </Flex>

          <Box my={1} flex={1}>
            <Label htmlFor="description">Description</Label>
            <TextInput
              id="description"
              name="description"
              placeholder="Rolex watch"
              size="large"
              value={description}
              onChangeText={setDescription}
            />
            <ErrorMessage errors={[]} visible={false} />
          </Box>

          <Box my={1} flex={1}>
            <Label htmlFor="invoice">Invoice</Label>
            <Button width={1} type="default" size="large">
              Upload the invoice for your asset
            </Button>
            <ErrorMessage errors={[]} visible={false} />
          </Box>
        </Box>

        <Flex my={3}>
          <Button
            width={1}
            px={4}
            type="primary"
            size="large"
            htmlType="submit"
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
