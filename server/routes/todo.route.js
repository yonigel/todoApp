const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get('/:id', todoController.getSingleTodo);
router.post('/getTodosByUser', todoController.getTodosByUser);
router.post('/getTodosByCategory', todoController.getTodosByCategory);
router.post('/', todoController.createTodo);
router.put('/', todoController.updateTodo);
router.delete('/deleteTodoById', todoController.deleteTodoById);
router.delete('/deleteTodosByCategory', todoController.deleteTodosByCategory);

module.exports = router;