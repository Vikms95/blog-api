const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]
      console.log(token)
      // Veryfiy the token
      const decoded = jwt.verify(token, 'secret')

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
    }
  }

  if (!token) {
    res.sendStatus(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }
