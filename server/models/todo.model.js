const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdBy: {type: String, required: true},
    categoryId: {type: String, required: true},
    isDone: {type: Boolean, require: true}
});

module.exports = mongoose.model('Todo', todoSchema);