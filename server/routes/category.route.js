const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller')

router.get('/', categoryController.getAllCategories);
router.get('/:categoryid', categoryController.getCategory);
router.post('/getAllCategoriesByUser', categoryController.getAllCategoriesByUser);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;