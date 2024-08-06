const express = require('express')
const {getBooks,createBook,deleteBook,updateBook} = require('../controlls/book')

const book_routes = express.Router()

book_routes.get('/',getBooks)
book_routes.post('/',createBook)
book_routes.delete('/:id',deleteBook)
book_routes.put('/:id',updateBook);

module.exports = {book_routes}