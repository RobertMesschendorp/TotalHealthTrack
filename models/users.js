/**
 * Created by RobertMesschendorp on 18/04/17.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    firstName       : String,
    lastName        : String,
    email           : String,
    password        : String,
    countryOfOrigin : String,
    yearsInNl       : Number,
    city            : String,
    major           : String,
    dateofBirth     : String
});

// Return model
module.exports = restful.model('users', userSchema);