import express from 'express';
import _ from 'lodash';
import createError from 'http-errors';
import {auth, isAuthenticated} from './auth';
import {accounts, assets} from './db/controllers';

const {Router} = express;
const api = Router();

// Test that server is up
api.get('/ping', (req, res) => res.json({message: 'pong'}));

// Auth
api.post('/register', accounts.register);
api.post('/login', auth, accounts.login);
api.all('/logout', accounts.logout);
api.get('/me', accounts.me);
api.get('/accounts', isAuthenticated, accounts.list);
api.get('/assets', isAuthenticated, assets.list);
api.post('/assets', isAuthenticated, assets.create);

/*
 * Catch-all 404 Not Found handler.
 *
 * Make sure to keep this defined right before the generic error handler.
 * If the request reaches this handler, then it means that it doesn't
 * match any of our defined routes.
 */
api.use((req, res, next) => {
  next(createError(404));
});

/*
 * Generic error handler.
 *
 * All errors should be passed down to here with the next function.
 * Make sure to keep this as the last route defined on the API so that
 * it can catch all errors.
 */
api.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err.message || 'Something went wrong. Please try again later',
  });
});

export default api;
