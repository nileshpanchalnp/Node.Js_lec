const mongoose = require('mongoose')

const book_schema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    discription:String,
    auther:String
},{
    timestamps:true,
})
const Book = mongoose.model('book',book_schema)
module.exports = {Book}