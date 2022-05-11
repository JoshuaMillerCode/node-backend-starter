const {Schema, model} = require('../config/db-connection')


const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
})

// You can add pre hooks to your schema right here

module.exports = model('User', userSchema)