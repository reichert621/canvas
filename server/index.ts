require('dotenv').config();

import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import {build, port, index, secret} from './config';
import {strategy, serialize, deserialize} from './auth';
import knex from './db/knex';
import api from './api';

const KnexSessionStore = require('connect-session-knex')(session);
const app = express();

app.use(cors());
app.use(express.static(build));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
    store: new KnexSessionStore({knex}),
  })
);

passport.use(strategy);
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api);
app.get('*', (req, res) => res.sendFile(index));

app.listen(port, () => {
  console.log(`🚀  Server listening on port ${port}`);
});
