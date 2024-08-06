const {Book} = require('../models/book')

const getBooks = async(req , res )=>{
        try{
            const data =await Book.find()
            res.json({
                data:data
            })
        }catch{
            res.json({
                error:error
            })
        }
}

const createBook = async(req , res )=>{
    try{
       const req_body = req.body

       const name = req_body['name']
       const discription = req_body['discription']
       const auther = req_body['auther']
         
       await Book.create({
           name:name,
           discription:discription,
           auther:auther
       })

       res.json({
           msg:'data create'
       })

    }catch{
        res.json({
            error:error
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        await Book.findByIdAndDelete(id);

        res.json({
            msg: "Data deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedBook) {
            return res.status(404).json({
                msg: "Book not found"
            });
        }

        res.json({
            msg: "Book updated successfully",
            data: updatedBook
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


module.exports={getBooks,createBook,deleteBook,updateBook}