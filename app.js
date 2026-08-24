const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

// dotenv require & db require
require('dotenv').config();
const db = require('./src/cofig/database');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// The ROOT route
app.get(('/'), (req, res) => {
    res.render('root');
});




// The LOGIN route
app.get(('/catalogo'), (req, res) => {
    res.render('catalogo')
})



// APP listen
app.listen(port, (error) => {
    if (error) {
        console.log("ERROR!");
        return;
    }
});