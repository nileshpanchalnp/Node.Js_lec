const express = require('express')
const {getMovie,createMovie} = require('../controlls/movie')

const movie_route = express.Router()

movie_route.get('/',getMovie)
movie_route.post('/',createMovie)

module.exports = {movie_route}


