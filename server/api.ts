import express from 'express';
import _ from 'lodash';
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

export default api;
