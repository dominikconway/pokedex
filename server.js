require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const pokemon = require('./models/pokemon.js');

// middleware
app.use(express.urlencoded({ extended: false}))

// INDEX
app.get('/', (req, res) => {
    res.render('index.ejs', { data: pokemon });
})

// SHOW
app.get('/:id', (req, res) => {
//res.render('show.ejs', { data: Pokemon[req.params.id] });
});

app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`))

