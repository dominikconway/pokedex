require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const pokemon = require('./models/pokemon.js');

// middleware
app.use(express.urlencoded({ extended: false}))

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemonData: pokemon})
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});

app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`))

