const { validationResult } = require('express-validator');
const { checkConnection } = require('../util/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signup = async (req, res, next) => {
  console.log("Tullaa signuppii");
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const userDetails = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    const result = await User.save(userDetails);

    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try{
    const user = await User.find(email);

    if (user[0].length !== 1) {
      return res.status(404).json({
        error: {
          message: 'A user with this email could not be found.',
        },
      });
    }

    const storedUser = user[0][0];

    const isEqual = await bcrypt.compare(password, storedUser.password);

    if (!isEqual) {
      return res.status(401).json({
        error: {
          message: 'Wrong password!',
        },
      });
    }

    const token = jwt.sign(
      {
        email: storedUser.email,
        userId: storedUser.id
      },
      'secretfortoken', 
      { expiresIn: '2h' }
    );

    res.status(200).json({ token: token, userId: storedUser.id });

  } catch(err){
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}