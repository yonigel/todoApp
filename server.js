const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB_URL = 'mongodb://localhost:27017/usersDB'//'mongodb://yonigel:Yonigel01!@ds229732.mlab.com:29732/todoappusers'
const PORT = process.env.PORT || 8080;

let userRoute = require('./server/routes/user.route')
let categoryRoute = require('./server/routes/category.route')

let mongoDB = process.env.MONGODB_URI || DB_URL

mongoose.connect(mongoDB, {useNewUrlParser: true})
mongoose.Promise = global.Promise

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/dist/todoApp'));

app.get('/', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});
app.get('/login', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});
app.get('/register', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});

app.get('/registrationSucceeded', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});

app.get('/todos', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});

app.get('/categoryPreview', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});

app.get('/addCategory', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});



app.use('/users', userRoute);
app.use('/categories', categoryRoute);

app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`)
});