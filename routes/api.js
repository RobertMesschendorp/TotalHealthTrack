/**
 * Created by RobertMesschendorp on 18/04/17.
 */
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var users = require('../models/users');

// Routes
users.methods(['get', 'put', 'post', 'delete']);
users.register(router, '/users');

// Return router
module.exports = router;