const Category = require('../models/category.model');

module.exports = {
    createCategory,
    deleteCategory,
    getAllCategories,
    getAllCategoriesByUser,
    addPermittedUser,
    removePermittedUser
}

async function createCategory(req, res) {

    if(await Category.findOne({name: req.body.name, createdBy: req.body.createdBy})) {
        console.log(`the user ${req.body.name} already has category named ${req.body.createdBy}`);
        res.send({
            status: 'error',    
            message: 'this category already exists by this user'
        })
        return;
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
    await Category.findByIdAndRemove((req.params.id));
}

async function getAllCategories(req, res) {
    let categories = await Category.find();
    res.send(categories);
}

async function getAllCategoriesByUser(req, res) {
    let categories = await Category.find();
    categories = categories.filter(category => 
        isUserPermitted(req.body.user, category.permittedUsers)
    )
    res.send(categories);

}

async function addPermittedUser(req, res) {
    let selectedCategory = await Category.findById(req.params.categoryId);
    if(isUserPermitted(req.body.username, selectedCategory.permittedUsers)) {
        console.log(`user ${req.body.username} is already permitted`);
        res.send({
            status: 'error',
            message: 'user is already permitted'
        })
    }
    selectedCategory.permittedUsers += `, ${req.body.username}`;
    selectedCategory.save();
    res.send({
        status: 'succeeded'
    });
}

async function removePermittedUser(req, res) {
    let selectedCategory = await Category.findById(req.params.categoryId);
    if(!isUserPermitted(req.body.username, selectedCategory.permittedUsers)) {
        console.log(`user ${req.body.username} is already not permitted`);
        res.send({
            status: 'error',
            message: 'user is already not permitted'
        })
    }
    
    let permittedUsersArray = selectedCategory.permittedUsers.split(",");
    permittedUsersArray = permittedUsersArray.filter(user => user.trim() != req.body.username.trim());
    let newPermittedUsers = permittedUsersArray.join();

    selectedCategory.permittedUsers = newPermittedUsers;
    selectedCategory.save();

    res.send({
        status: 'succeeded'
    });
}

function isUserPermitted(selectedUser, users) {
    let splittedUsers = users.split(",");
    for (let user of splittedUsers) {
        if(user.trim() == selectedUser.trim()) {
            return true;
        }
    }
    return false;
}



