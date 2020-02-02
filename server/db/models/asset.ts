import {Model} from 'objection';
import moment from 'moment';

export type Credentials = {
  email?: string;
  password?: string;
};

export default class Asset extends Model {
  id!: number;
  account_id!: number;
  description!: string;
  value!: number;
  purchased_at!: moment.Moment;

  static tableName = 'assets';

  static jsonSchema = {
    type: 'object',
    required: ['description', 'account_id'],

    properties: {
      id: {type: 'integer'},
      account_id: {type: 'integer'},
      description: {type: 'string', minLength: 1, maxLength: 255},
    },
  };
}
