const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB_URL = 'mongodb://localhost:27017/usersDB'//'mongodb://yonigel:Yonigel01!@ds229732.mlab.com:29732/todoappusers'

var userRoute = require('./server/routes/user.route')

var mongoDB = process.env.MONGODB_URI || DB_URL

mongoose.connect(mongoDB, {useNewUrlParser: true})
mongoose.Promise = global.Promise

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/todoApp'));

app.get('/', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});
app.get('/login', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});


app.get('/todos', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/todoApp/index.html'));
});

app.use('/users', userRoute)
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, function() {
    console.log(`listening to port`)
});