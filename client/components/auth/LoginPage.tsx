import * as React from 'react';
import {RouteComponentProps, Link} from 'react-router-dom';
import styled from 'styled-components';
import first from 'lodash/first';
import get from 'lodash/get';
import {
  colors,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Label,
  Text,
  TextInput,
} from '../Common';
import * as Auth from '../../api/auth';

const FormContainer = styled(Flex)`
  && {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    @media (max-width: 720px) {
      min-width: 0px;
      max-width: 100%;
    }
  }
`;

const ValuePropsContainer = styled(Flex)`
  && {
    @media (max-width: 720px) {
      display: none;
    }
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
      color={colors.red}
    >
      {first(errors) || <Text>&nbsp;</Text>}
    </Text>
  );
};

const ValueProps = () => {
  return (
    <ValuePropsContainer flexDirection="column" px={[2, 4]} py={5} flex={1}>
      {/* Value Props */}
    </ValuePropsContainer>
  );
};

type FormProps = {onSubmit: () => void};

const LoginForm = ({onSubmit}: FormProps) => {
  const [submitAttempts, setSubmitAttempts] = React.useState(0);
  const [serverError, setServerError] = React.useState(null);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const credentials = {email, password};

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setSubmitAttempts(submitAttempts + 1);
    // Clear the server error if one exists
    setServerError(null);

    Auth.login(credentials)
      .then(account => {
        console.log('Success!', account);
      })
      .then(() => onSubmit())
      .catch(err => {
        console.log('Error!', err);
        const msg = get(err, 'response.body.message', 'Invalid credentials');
        setServerError(msg);
      });
  };

  return (
    <FormContainer px={[4, 5]} py={2} flex={1}>
      <Flex
        style={{maxWidth: 384}}
        width={1}
        flexDirection="column"
        justifyContent="center"
      >
        <Heading mb={3} fontSize={40} fontWeight={400}>
          Welcome back.
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              size="large"
              type="email"
              onChangeText={setEmail}
            />
          </Box>

          <Box mb={2}>
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              size="large"
              type="password"
              onChangeText={setPassword}
            />
          </Box>

          <Box mt={3}>
            <Button width={1} size="large" type="primary" htmlType="submit">
              Log in
            </Button>
          </Box>
          <Box mt={2}>
            <ErrorMessage errors={[serverError]} visible={submitAttempts > 0} />
          </Box>
        </form>

        <Box mt={3}>
          <Text>
            Don't have an account? <Link to="register">Sign up!</Link>
          </Text>
        </Box>
      </Flex>
    </FormContainer>
  );
};

export const LoginPage = ({history}: RouteComponentProps) => {
  // TODO: make sure fills whole height!
  return (
    <Flex flex={1}>
      <ValueProps />
      <LoginForm onSubmit={() => history.push('/onboarding')} />
    </Flex>
  );
};

export default LoginPage;
