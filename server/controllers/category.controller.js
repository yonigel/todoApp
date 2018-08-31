const Category = require('../models/category.model');

module.exports = {
    createCategory,
    deleteCategory,
    getCategory,
    getAllCategories,
    getAllCategoriesByUser,
    updateCategory
}

async function createCategory(req, res) {

    if(await Category.findOne({name: req.body.name, createdBy: req.body.createdBy})) {
        console.log(`the user ${req.body.name} already has category named ${req.body.createdBy}`);
        res.send({
            status: 'error',
            message: 'this category already exists by this user'
        })
    }

    let newCategory = new Category({
        name: req.body.name,
        description: req.body.description,
        permittedUsers: req.body.createdBy,
        createdBy: req.body.createdBy
    });

    await newCategory.save();

    res.send({
        status: 'succeeded'
    })
}

async function deleteCategory(req, res) {

}

async function getCategory(req, res) {

}

async function getAllCategories(req, res) {
    let categories = await Category.find();
    res.send(categories);
}

async function getAllCategoriesByUser(req, res) {

}

async function updateCategory(req, res) {

}

