const {Movie} = require('../models/movie')

const getMovie = async (req,res)=>{
    try{
        const data = await Movie.find()
        res.json({
            Movielist:data
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

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;

        await Movie.findByIdAndDelete(id);

        res.json({
            msg: "Data deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedMovie = await Book.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedMovie) {
            return res.status(404).json({
                msg: "movie not found"
            });
        }

        res.json({
            msg: "movie updated successfully",
            data: updatedMovie
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {getMovie,createMovie,deleteMovie,updateMovie}