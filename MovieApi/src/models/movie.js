const mongoose = require('mongoose')

const movie_schema = new mongoose.Schema({
    movie:{
        type:String,
        require:true,
    },

    cast:{
        type:String,
        require:true,
    },

    director:{
        type:String,
        require:true,
    },

    rating:{
        type:Number,
        require:true,
    },

    year:{
        type:Number,
        require:true,
    },
    poster:String
})

const Movie = mongoose.model('movie',movie_schema)
module.exports={Movie}
    
