'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = Schema({
    name: String,
    products: [{type: Schema.Types.ObjectId, ref:'product'}]
});

module.exports = mongoose.model('category', categorySchema);