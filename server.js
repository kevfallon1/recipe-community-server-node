const express = require('express')
const app = express()

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', ["https://recipe-community.herokuapp.com/"]);
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
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
mongoose.connect('mongodb+srv://recipe-community-node:recipecommunitydb@cluster0.ocy12.mongodb.net/recipeDB?retryWrites=true&w=majority',
                 {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(3000)