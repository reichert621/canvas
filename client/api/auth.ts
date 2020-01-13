import request from 'superagent';

export type Account = {
  id: number;
  email: string;
  fullName?: string;
};

export type Credentials = {
  email: string;
  password: string;
  fullName?: string;
  inviteCode?: string;
};

export const register = async (credentials: Credentials): Promise<any> => {
  return request
    .post('/api/register')
    .send(credentials)
    .then(res => res.body);
};

export const fetchCurrentUser = async (): Promise<any> => {
  return request.get('/api/me').then(res => res.body);
};

export const login = async (credentials: Credentials): Promise<any> => {
  console.log('Logging in?', credentials);
  return request
    .post('/api/login')
    .send(credentials)
    .then(res => res.body);
};

export const logout = (): Promise<any> => {
  return request.del('/api/logout');
};
