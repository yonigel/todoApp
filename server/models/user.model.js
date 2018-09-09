const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true, max: 20},
    password: {type: String, required: true, max: 8},
    email: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)