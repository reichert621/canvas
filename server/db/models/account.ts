import * as crypto from 'crypto';
import {first, omit} from 'lodash';
import knex from '../knex';

export type Schema = {
  id: number;
  email: string;
  salt: string;
  password: string;
};

export type Credentials = {
  email?: string;
  password?: string;
};

const Model = () => knex('accounts');

const makeSalt = (num = 20) => {
  return crypto.randomBytes(num).toString('hex');
};

const getHashed = (password: string, salt: string) => {
  return crypto
    .createHmac('sha512', salt)
    .update(password)
    .digest('hex');
};

const verifyPassword = (password: string, salt: string, hashed: string) => {
  return getHashed(password, salt) === hashed;
};

const isValidUser = (user: Schema, password: string) => {
  if (!user) throw new Error(`Invalid user ${user}!`);

  const {salt, password: hashed} = user;
  const isValid = verifyPassword(password, salt, hashed);

  return isValid;
};

export const verifyUser = (user: Schema, password: string) => {
  if (isValidUser(user, password)) {
    return user;
  } else {
    throw new Error('Invalid password!');
  }
};

export const formatted = (user: Schema) => omit(user, ['password', 'salt']);

const sanitized = (params: any) => {
  const {password} = params;
  const salt = makeSalt();

  return Object.assign({}, params, {
    salt,
    password: getHashed(password, salt),
  });
};

export const fetch = (where: any = {}) => {
  return Model()
    .select()
    .where(where);
};

export const findOne = (where: any = {}) => {
  return fetch(where).first();
};

export const findById = (id: number) => {
  return findOne({id});
};

export const findByEmail = (email: string) => {
  return findOne({email}).then(user => user);
};

export const create = (params: any) => {
  return Model()
    .returning('id')
    .insert(sanitized(params))
    .then(ids => first(ids))
    .then(id => {
      if (!id) {
        throw new Error(`Failed to insert with params: ${params}`);
      } else {
        return findById(id);
      }
    });
};

export const register = async ({email, password}: Credentials) => {
  if (!email) throw new Error('Email is required!');
  if (!password) throw new Error('Password is required!');

  return findByEmail(email)
    .then(existing => {
      if (existing) throw new Error('That email address is taken!');

      return create({email, password});
    })
    .then(user => formatted(user));
};

export const authenticate = async ({email, password}: Credentials) => {
  if (!email) throw new Error('Email is required!');
  if (!password) throw new Error('Password is required!');

  return findByEmail(email)
    .then(user => verifyUser(user, password))
    .then(user => formatted(user));
};
