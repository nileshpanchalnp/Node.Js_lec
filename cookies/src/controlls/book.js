const {Book} = require('../models/book')

const getBook = async(req,res)=>{
    try{

        const data = await Book.find()
        res.json({
            data:data
        })
        

    }catch(error){
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

module.exports = {getBook,createBook}