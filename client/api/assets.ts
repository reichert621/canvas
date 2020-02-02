import request from 'superagent';

export const create = async (params: any): Promise<any> => {
  return request
    .post('/api/assets')
    .send(params)
    .then(res => res.body);
};
