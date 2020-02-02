import {Request, Response, NextFunction} from 'express';
import passport from 'passport';
import {Strategy, VerifyFunction} from 'passport-local';
import {Account} from './db/models';

const DEFAULT_REDIRECT = '/';

const verify: VerifyFunction = async (email, password, cb) => {
  return Account.findByEmail(email)
    .then(account => {
      if (!account) return cb(null, false);
      if (!Account.verify(account, password)) {
        return cb(null, false);
      }

      return cb(null, account);
    })
    .catch(err => cb(err));
};

export const strategy = new Strategy({usernameField: 'email'}, verify);

export const serialize = (
  account: Account,
  done: (err: any, id?: number) => void
) => {
  return done(null, account.id);
};

export const deserialize = async (
  id: number,
  done: (err: any, account?: Account) => void
) => {
  return Account.query()
    .findById(id)
    .then(account => done(null, account))
    .catch(err => done(err));
};

export const authenticate = (type = 'local') => {
  return passport.authenticate(type, {
    failureRedirect: DEFAULT_REDIRECT,
  });
};

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }

  return res.status(401).send({status: 401, error: 'Access denied.'});
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const fn = authenticate();

  return fn(req, res, next);
};
