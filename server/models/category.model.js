const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    permittedUsers: {type: String, required: true},
    createdBy: {type: String, required: true}
})

module.exports = mongoose.model('Category', categorySchema);