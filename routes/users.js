const router = require('express').Router();

const {
  getUser,
} = require('../controllers/users');

router.get('/:userLogin', getUser);

module.exports = router;
