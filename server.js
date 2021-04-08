const express = require('express')
const app = express()
require('dotenv').config({ path: '.env' });
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded
({ extended: false }))
app.use(bodyParser.json())
const MONGO_DB_URI = process.env.MONGO_DB_URI;

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://recipe-community.herokuapp.com/register");
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

const session = require('express-session')
app.use(session({
                    secret: 'keyboard cat',
                    resave: false,
                    saveUninitialized: true,
                    // cookie: { secure: true }
                }))

const mongoose = require('mongoose');
mongoose.connect(MONGO_DB_URI,
                 {useNewUrlParser: true, useUnifiedTopology: true});

require("./controllers/users-controller")(app)

app.listen(process.env.PORT || 3000)