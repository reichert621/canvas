import KnexConnector from 'knex';
import {Model} from 'objection';

const env = process.env.NODE_ENV || 'dev';
const config = require('./knexfile')[env];
const knex = KnexConnector(config);

Model.knex(knex);

export default knex;
