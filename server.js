require('dotenv').config()

const express = require('express')

const app = express();
const PORT = process.env.PORT || 3001;
const pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// middleware
app.use(express.urlencoded({ extended: false}))

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemonData: pokemon})
})

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});

// POST
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

// DELETE
app.delete('/pokemon/:id', (req, res) => {
    // grab the index from params
    const index = req.params.id
    // splice the fruit from fruits
    pokemon.splice(index, 1)
    // redirect back to main page
    res.redirect('/pokemon')
  })

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    // render edit.ejs
    res.render('edit.ejs', {
      Pokemon: pokemon[req.params.id], index: req.params.id
    })
  })
// UPDATE
  app.put('/pokemon/:id', (req, res) => {
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon')
  })

app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`))

