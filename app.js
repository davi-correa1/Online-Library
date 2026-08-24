const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// The ROOT route
app.get(('/'), (req, res) => {
    res.render('root');
});

app.post(('/'), (req, res) => {
    req.body('')
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