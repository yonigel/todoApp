const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/test', userController.test)

router.post('/', userController.createUser)

router.get('/:id', userController.getSingleUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router