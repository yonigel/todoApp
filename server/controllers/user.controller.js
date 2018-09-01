const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sercret = "yonigel";

module.exports = {
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    authentication,
    getAllUsers,
    getUserByUsername
}

async function getUserByUsername(req, res) {
    let user = await User.findOne({username: req.body.username}).select('-password');
    console.log(user)
    if(user) {
        res.send(user);
    }
    else {
        res.send({
            status: 'error',
            message: 'user not exists'
        })
    }
}

async function getAllUsers(req, res) {
    let users = await User.find().select('-password');
    res.send(users);
}

async function createUser(req, res) {
    console.log(`creating user`)
    if(await User.findOne({username: req.body.username})) {
        res.send({
            status: 'error',
            message: 'user already exists'
        })
    }
    return;

    let user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10) 
    })
    let savedUser = await user.save();
    res.send({
        status: 'succeeded'
    });
}

async function getSingleUser(req, res) {
    let user = await User.findById(req.params.id).select('-password');
    res.send(user);
}

async function updateUser(req, res) {
    await User.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.send('user updated');
}

async function deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id);
    res.send('user deleted');
}

async function authentication(req, res) {
    console.log(req.body);
    let user = await User.findOne({username: req.body.username});
    if(user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({sub: user._id}, sercret);
        let returnedUser = {
            user,
            token
        }
        res.send(returnedUser);
    }
    else {
        res.send({
            status: 'error',
            message: 'authentication failed'
        })
    }
}