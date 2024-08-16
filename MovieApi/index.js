const express = require('express')
const mongoose = require('mongoose')

const {movie_route} = require('./src/routes/movie')

const app = express()
app.use(express.json())
app.use('/movie/img',express.static('src/imgs'))
app.use('/movie',movie_route)

app.listen(8000, ()=>{
    mongoose.connect('mongodb://localhost:27017/movie-data')
    console.log("server started at http://localhost:8000/")
})