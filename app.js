const express = require('express')
const app=express()
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// The ROOT ROUTE
app.get(('/'), (req, res) => {
    res.render('root');
});

app.listen(port)