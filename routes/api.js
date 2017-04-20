/**
 * Created by RobertMesschendorp on 18/04/17.
 */
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var users = require('../models/users');
var recipes = require('../models/recipes');

// Routes
users.methods(['get', 'put', 'post', 'delete']);
users.register(router, '/users');

recipes.methods(['get', 'put', 'post', 'delete']);
recipes.register(router, '/recipes');

// Return router
module.exports = router;