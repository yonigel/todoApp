const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const sercret = "yonigel"

module.exports = {
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    authentication,
    getAllUsers
}

async function getAllUsers(req, res) {
    let users = await User.find()
    res.send(users)
}

async function createUser(req, res) {

    if(await User.findOne({username: req.body.username})) {
        throw `username ${req.body.username} already exists`;
    }

    let user = new User({
        username: req.body.username,
        password: req.body.password
    })
    let savedUser = await user.save()
    res.send(`user: [${user.username}] created`)
}

async function getSingleUser(req, res) {
    let user = await User.findById(req.params.id)
    res.send(user)
}

async function updateUser(req, res) {
    await User.findByIdAndUpdate(req.params.id, {$set: req.body})
    res.send('user updated')
}

async function deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id)
    res.send('user deleted')
}

async function authentication(req, res) {
    console.log(req.body)
    const user = await User.findOne({username: req.body.username, password: req.body.password})
    const token = jwt.sign({sub: user._id}, sercret)
    let returnedUser = {
        user,
        token
    }
    res.send(returnedUser)
}