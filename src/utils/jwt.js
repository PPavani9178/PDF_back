// // src/utils/jwt.js
// const jwt = require('jsonwebtoken');

// const generateToken = (username) => {
//   return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// module.exports = {
//   generateToken,
// };

const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
  generateToken,
};
