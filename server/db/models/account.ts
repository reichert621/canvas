import {Model} from 'objection';
import {omit} from 'lodash';
import crypto from 'crypto';
import Asset from './asset';

export type Credentials = {
  email?: string;
  password?: string;
};

export default class Account extends Model {
  id!: number;
  email!: string;
  password!: string;
  salt!: string;
  full_name!: string;
  country!: string;

  static tableName = 'accounts';

  static jsonSchema = {
    type: 'object',
    required: ['email', 'password'],

    properties: {
      id: {type: 'integer'},
      email: {type: 'string', minLength: 1, maxLength: 255},
      password: {type: 'string', minLength: 1, maxLength: 255},
      full_name: {type: 'string', minLength: 1, maxLength: 255},
      country: {type: 'string', minLength: 1, maxLength: 255},
    },
  };

  static relationMappings = {
    assets: {
      relation: Model.HasManyRelation,
      modelClass: Asset,
      join: {
        from: 'accounts.id',
        to: 'assets.account_id',
      },
    },
  };

  // Test $beforeInsert hook for making salt?

  static makeSalt = (num = 20) => {
    return crypto.randomBytes(num).toString('hex');
  };

  static getHashed = (password: string, salt: string) => {
    return crypto
      .createHmac('sha512', salt)
      .update(password)
      .digest('hex');
  };

  static verifyPassword = (password: string, salt: string, hashed: string) => {
    return Account.getHashed(password, salt) === hashed;
  };

  static isValidAccount = (account: Account, password: string) => {
    if (!account) throw new Error(`Invalid account ${account}!`);

    const {salt, password: hashed} = account;
    const isValid = Account.verifyPassword(password, salt, hashed);

    return isValid;
  };

  static hashPasswordWithSalt = (params: any) => {
    const {password} = params;
    const salt = Account.makeSalt();

    return Object.assign({}, params, {
      salt,
      password: Account.getHashed(password, salt),
    });
  };

  static findByEmail = (email: string) => {
    return Account.query().findOne({email});
  };

  // TODO: see if something similar is built into Objection
  // Test out $afterFind to see if that will work?
  static formatted = (account: Account) => {
    return omit(account, ['password', 'salt']);
  };

  static verify = (account: Account, password: string) => {
    if (Account.isValidAccount(account, password)) {
      return account;
    } else {
      throw new Error('Invalid password!');
    }
  };

  static create = params => {
    const account = Account.hashPasswordWithSalt(params);

    return Account.query().insert(account);
  };

  static register = async ({email, password}: Credentials) => {
    if (!email) throw new Error('Email is required!');
    if (!password) throw new Error('Password is required!');

    return Account.findByEmail(email)
      .then(existing => {
        if (existing) throw new Error('That email address is taken!');

        return Account.create({email, password});
      })
      .then(account => Account.formatted(account));
  };

  static authenticate = async ({email, password}: Credentials) => {
    if (!email) throw new Error('Email is required!');
    if (!password) throw new Error('Password is required!');

    return Account.findByEmail(email)
      .then(account => Account.verify(account, password))
      .then(account => Account.formatted(account));
  };
}
