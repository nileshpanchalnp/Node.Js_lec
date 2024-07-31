const express = require('express')
const mongoose = require('mongoose')
const {book_routes} = require('./src/routes/book')

const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())
app.use('/', book_routes)
// app.get('/',(req,res)=>{
//     res.json({
//         msg:'hello word'
//     })
// })


app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/books-collection')
    console.log("server started at http://localhost:8000/")
})