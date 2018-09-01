const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller')

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/getAllCategoriesByUser', categoryController.getAllCategoriesByUser);
router.post('/', categoryController.createCategory);
router.put('/addPermittedUser/:categoryId', categoryController.addPermittedUser);
router.put('/removePermittedUser/:categoryId', categoryController.removePermittedUser);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;