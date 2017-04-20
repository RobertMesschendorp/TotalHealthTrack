/**
 * Created by RobertMesschendorp on 20/04/17.
 */
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var recipeSchema = new mongoose.Schema({
    name            : String,
    recipeName      : String,
    category        : String,
    ingredients     : Object,
    preparation     : String,
    costsPerPerson  : Number,
    preperationTime : String
});

// Return model
module.exports = restful.model('recipes', recipeSchema);