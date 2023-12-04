const express = require('express');

const { body , query } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');
const auth = require('../middleware/auth');


router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.signup
);

router.post('/login', authController.login);

router.delete(
  '/deleteuser', 
  [
    auth,
    query('userId').trim().notEmpty(),
  ],
  authController.deleteUser
)

module.exports = router;