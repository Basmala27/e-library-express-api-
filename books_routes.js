const express = require('express');
const router = express.Router();
const books_controller = require('../controllers/books_controller');
const checkAuthorization = require('../middleware/authorization_middleware');


router.post('/', checkAuthorization, books_controller.createBook);


router.get('/', books_controller.getAllBooks);


router.get('/:id', books_controller.getBookById);

module.exports = router;
