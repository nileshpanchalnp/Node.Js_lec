const express = require('express')
const {getBook,createBook} = require('../controlls/book')

const book_routes = express.Router()

book_routes.get('/',getBook)
book_routes.post('/',createBook);

module.exports = {book_routes}