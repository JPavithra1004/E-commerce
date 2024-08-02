const express = require('express');
const Router = express.Router();
const userController = require('../controlers/userController');


Router.post("/addUser",userController.addUser);
Router.post("/login",userController.login);

module.exports = Router;
