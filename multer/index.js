const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

app.use(express.json())

app.post('/',(req,res)=>{
    res.json({
        data:data
    })
})

// app.listen(8000)
app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URL)
    console.log(`server started at http://localhost:${process.env.PORT}/`)
})