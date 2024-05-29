const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
});

module.exports = model('User', userSchema);
