const express = require('express')
const {getMovie,createMovie,deleteMovie,updateMovie} = require('../controlls/movie')

const movie_route = express.Router()

movie_route.get('/',getMovie)
movie_route.post('/',createMovie)
movie_route.delete('/:id',deleteMovie)
movie_route.put('/:id',updateMovie)
module.exports = {movie_route}


