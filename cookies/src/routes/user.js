const express = require('express')
const {registration,loginUser,getUser} = require('../controlls/user')

const user_routes = express.Router()

user_routes.post('/register',registration)
user_routes.get('/',loginUser)
user_routes.get('/',getUser)

module.exports = {user_routes}