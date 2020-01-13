import * as React from 'react';
import {RouteComponentProps, Link} from 'react-router-dom';
import styled from 'styled-components';
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
import {register, login} from '../../api/auth';

const FormContainer = styled(Flex)`
  && {
    max-width: 540px;
    min-width: 480px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    @media (max-width: 720px) {
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

const ValueProps = () => {
  return (
    <ValuePropsContainer flexDirection="column" px={[2, 4]} py={5} flex="2">
      Value Props
    </ValuePropsContainer>
  );
};

type FormProps = {onSubmit: () => void};

const RegisterForm = ({onSubmit}: FormProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    register({email, password})
      .then(account => {
        console.log('Success!', account);

        return login({email, password});
      })
      .then(() => onSubmit())
      .catch(err => {
        console.log('Error!', err);
      });
  };

  return (
    <FormContainer
      px={[4, 5]}
      py={2}
      flex="1"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading mb={4} fontSize={40} fontWeight={400}>
        Get started.
      </Heading>
      <form onSubmit={handleSubmit}>
        <TextInput
          mb={2}
          size="large"
          type="email"
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          mb={2}
          size="large"
          type="password"
          placeholder="Password"
          onChangeText={setPassword}
        />
        <Button width={1} mt={3} size="large" type="primary" htmlType="submit">
          Sign up
        </Button>
      </form>

      <Box mt={4}>
        <Text>
          Already have an account? <Link to="login">Log in!</Link>
        </Text>
      </Box>
    </FormContainer>
  );
};

const RegisterPage = ({history}: RouteComponentProps) => {
  // TODO: make sure fills whole height!
  return (
    <Flex style={{minHeight: '100%'}}>
      <RegisterForm onSubmit={() => history.push('/onboarding')} />
      <ValueProps />
    </Flex>
  );
};

export default RegisterPage;
