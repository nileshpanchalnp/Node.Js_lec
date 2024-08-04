const {Movie} = require('../models/movie')

const getMovie = async (req,res)=>{
    try{
        const data = await Movie.find()
        res.json({
            data:data
        })
    }catch(error){
        res.json({
            erro:error
        })
    }
}

const createMovie = async (req,res)=>{
    try{

        const req_body = req.body

        const movie = req_body['movie']
        const cast = req_body['cast']
        const director = req_body['director']
        const rating = req_body['rating']
        const year = req_body['year']
         
        await Movie.create({
            movie:movie,
            cast:cast,
            director:director,
            rating:rating,
            year:year,
        })

        res.json({
            msg:'movie detail create'
        })
    }catch(error){
        res.json({
            erro:error
        })
    }
}

module.exports = {getMovie,createMovie}