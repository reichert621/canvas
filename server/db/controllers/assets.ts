import {Asset} from '../models';

export const list = async (req, res) => {
  const assets = await Asset.query();

  return res.json({assets});
};

export const create = async (req, res) => {
  const params = req.body;
  const account = req.user;
  const asset = await Asset.query().insert({
    ...params,
    account_id: account.id,
  });

  return res.json({asset});
};
