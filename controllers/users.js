const { TWICH_URL } = require('../config');

module.exports.getUser = async (req, res, next) => {
  try {
    const { userLogin } = req.params;
    const url = `${TWICH_URL}/users?login=${userLogin}`;
    const response = await fetch(url, {
      headers: {
        Authorization: req.headers.Authorization,
        'Client-Id': req.headers['Client-Id'],
      },
    });
    const json = await response.json();
    res.send(json);
  } catch (err) {
    next(err);
  }
};
