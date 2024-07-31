const express = require('express')
const {getBooks,createBook} = require('../controlls/book')

const book_routes = express.Router()

book_routes.get('/',getBooks)
book_routes.post('/',createBook);

module.exports = {book_routes}