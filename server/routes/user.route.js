const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/:id', userController.getSingleUser)

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.post('/authentication', userController.authentication)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router