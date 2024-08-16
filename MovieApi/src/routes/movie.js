const express = require('express')
const {getMovie,createMovie,deleteMovie,updateMovie} = require('../controlls/movie')
const {multerConfig} = require('../config/multer_confiig')

const movie_route = express.Router()

movie_route.get('/',getMovie)
movie_route.post('/create',multerConfig.single('img'),createMovie)
movie_route.delete('/delete/:id',deleteMovie)
movie_route.put('/update/:id',updateMovie)
module.exports = {movie_route}


