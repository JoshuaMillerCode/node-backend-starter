// Require the model you will be using at the top 
// Ex: const User = require('../models/User')

module.exports = {
  controller
}

async function controller(req, res) {
  try {
    res.status(200).json('Hi :) Your awesome!')
  } catch (err) {
    res.status(400).json('No Beuno:(')
  }
}