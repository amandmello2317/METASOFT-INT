const express = require('express')
const {AuthSignup, Authlogin} = require('../Controller/AuthController/AuthController')



const Authrouter = express.Router()

// PLEASE USE THE SIGNUP AND SIGNIN FOR ADMIN USING POSTMAN 
// http://localhost:5000/api/admin/login
Authrouter.post('/signup', AuthSignup)

// EMAIL:- admin@gmail.com, password:- 123
Authrouter.post('/login', Authlogin)

module.exports = Authrouter
