const User = require('../models/user.model')

exports.test = function(req, res) {
    res.send('test works fine')
}

exports.createUser = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    })

    user.save(function(err) {
        if(err) {
            return next(err)
        }
        res.send(`user: [${user.username}] created`)
    })
}

exports.getSingleUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(err) {
            return next(err)
        }
        else {
            res.send(user)
        }
    })
}

exports.updateUser = function(req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, user) {
        if(err) {
            return next(err)
        }
        else {
            res.send('user updated')
        }
    })
}

exports.deleteUser = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            return next(err)
        }
        else {
            res.send('user deleted')
        }
    })
}