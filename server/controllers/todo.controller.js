const Todo = require('../models/todo.model');

module.exports = {
    getSingleTodo,
    getTodosByCategory,
    createTodo,
    updateTodo,
    deleteTodoById,
    deleteTodosByCategory
}

async function getSingleTodo(req, res) {
    let todo = await Todo.findById(req.params.id);
    res.send(todo);
}

async function getTodosByCategory(req, res) {
    let todos = await Todo.find({categoryId: req.body.categoryId});
    res.send(todos);
}

async function createTodo(req, res) {
    let todo = new Todo();
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.createdBy = req.body.createdBy;
    todo.categoryId = req.body.categoryId;
    todo.isDone = false;
    todo.save();
    res.send(todo);
}

async function updateTodo(req, res) {
    let todo = await Todo.findById(req.params.id);
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.isDone = req.body.isDone;
    todo.save();
    res.send(todo);
}

async function deleteTodoById(req, res) {
    await Todo.findByIdAndRemove(req.params.id);
    res.send({
        status: 'succeeded'
    });
}

async function deleteTodosByCategory(req, res) {
    // let todos = await Todo.find();
    let todos = await Todo.remove({categoryId: req.params.id});
    console.log(todos);
    res.send(todos);
}