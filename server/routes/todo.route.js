const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get('/:id', todoController.getSingleTodo);
router.post('/getTodosByCategory', todoController.getTodosByCategory);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/deleteTodoById/:id', todoController.deleteTodoById);
router.delete('/deleteTodosByCategory/:id', todoController.deleteTodosByCategory);

module.exports = router;