import request from 'superagent';

export type Account = {
  id: number;
  email: string;
};

export type Credentials = {
  email: string;
  password: string;
};

type Validator = {
  isValid: boolean;
  message: string;
  level?: 'error' | 'warning' | 'info';
};

const isPresent = (value: string) => value && value.trim().length > 0;
const isValidEmail = (value: string) => value && /^.+@.+\..+$/.test(value);
const isValidPassword = (value: string) => value && value.trim().length >= 8;

export const validate = (
  credentials: Credentials
): {[field: string]: Array<Validator>} => {
  const {email, password} = credentials;

  return {
    email: [
      {
        isValid: isPresent(email),
        message: 'Please enter an email address',
      },
      {
        isValid: isValidEmail(email),
        message: 'Please enter a valid email address',
      },
    ],
    password: [
      {
        isValid: isPresent(password),
        message: 'Please enter a password',
      },
      {
        isValid: isValidPassword(password),
        message: 'Your password must be at least 8 characters',
      },
    ],
  };
};

export const register = async (credentials: Credentials): Promise<Account> => {
  return request
    .post('/api/register')
    .send(credentials)
    .then(res => res.body.account);
};

export const fetchCurrentUser = async (): Promise<Account> => {
  return request.get('/api/me').then(res => res.body.account);
};

export const login = async (credentials: Credentials): Promise<Account> => {
  return request
    .post('/api/login')
    .send(credentials)
    .then(res => res.body.account);
};

export const logout = (): Promise<any> => {
  return request.del('/api/logout');
};
