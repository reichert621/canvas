const {Account} = require('../models');

export const isAuthenticated = (req, res) => {
  const isLoggedIn = Boolean(req.user && req.user.id);

  return res.json({
    is_authenticaed: isLoggedIn,
    account: req.user,
  });
};

export const me = (req, res) => {
  const {user} = req;

  if (!user || !user.id) {
    return res.status(401).send({status: 401, error: 'Not authenticated.'});
  }

  return res.json({account: Account.formatted(user)});
};

export const login = async (req, res) => {
  const credentials = req.body;
  const account = await Account.authenticate(credentials);

  return res.json({account});
};

export const register = async (req, res) => {
  const credentials = req.body;
  const account = await Account.register(credentials);

  return res.json({account});
};

export const list = async (req, res) => {
  const accounts = await Account.fetch();

  return res.json({accounts});
};

export const logout = (req, res) => {
  req.logout();

  return res.status(200).send({status: 200});
};
