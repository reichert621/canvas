import {Account} from '../models';

export const isAuthenticated = (req, res) => {
  const isLoggedIn = Boolean(req.user && req.user.id);

  return res.json({
    is_authenticated: isLoggedIn,
    account: req.user,
  });
};

export const me = (req, res) => {
  const {user} = req; // TODO: rename to req.account?

  if (!user || !user.id) {
    return res.status(401).send({status: 401, error: 'Not authenticated.'});
  }

  return res.json({account: Account.formatted(user)});
};

export const login = async (req, res) => {
  const credentials = req.body;
  try {
    const account = await Account.authenticate(credentials);

    return res.json({account});
  } catch (err) {
    return res.status(500).send({
      error: err.message || 'Error logging in',
    });
  }
};

export const register = async (req, res) => {
  const credentials = req.body;
  try {
    const account = await Account.register(credentials);

    return res.json({account});
  } catch (err) {
    return res.status(500).send({
      error: err.message || 'Error registering an account',
    });
  }
};

export const list = async (req, res) => {
  try {
    const accounts = await Account.query();

    return res.json({accounts});
  } catch (err) {
    return res.status(500).send({
      error: err.message || 'Error retrieving accounts list',
    });
  }
};

export const logout = (req, res) => {
  req.logout();

  return res.status(200).send({status: 200});
};
