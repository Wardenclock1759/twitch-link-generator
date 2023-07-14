const { TWITCH_CLIENT_ID, TWICH_TOKEN } = require('../config');

module.exports = (req, res, next) => {
  req.headers.Authorization = `Bearer ${TWICH_TOKEN}`;
  req.headers['Client-Id'] = TWITCH_CLIENT_ID;
  next();
};
