const express = require('express')
const mongoose = require('mongoose')
const cookieParse = require('cookie-parser')
const { book_routes } = require('./src/routes/book')
const { user_routes } = require('./src/routes/user')


const app = express()
app.use(express.json())
app.use(cookieParse())

app.use('/book', book_routes)
app.use('/user', user_routes)

app.get('/set', (req, res) => {

    const time = "data with time 2"
    res.cookie('data2', time, { maxAge: 10000 });

    res.json({
        msg: "my server is running"
    })
})

app.get('/get', (req, res) => {
    res.json({
        msg: req.cookies
    })
})




app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/books-collection')
    console.log("server started at http://localhost:8000/")
})