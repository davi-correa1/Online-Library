const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// dotenv require & db require
// require('dotenv').config();
// const db = require('./src/cofig/database');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// The ROOT route
app.get(('/'), (req, res) => {
    res.render('root');
});

app.post(('/'), (req, res) => {
    const data = req.body;

    if ((data.username != '') && (data.password != '')) {
        console.log("Deu certo");
        res.render('catalogo');
    } else if ((data.newUser != '') && (data.newPassword != '')) {
        console.log("Deu certo");
        res.render('catalogo');
    } else {
        console.log("Deu ruim");
    };

});

// The LOGIN route
app.get(('/catalogo'), (req, res) => {
    res.render('catalogo');
});



// APP listen
app.listen(port, (error) => {
    if (error) {
        console.log("ERROR!");
        return;
    }
});