const express = require('express');
const router = express.Router();
const authors_controller = require('../controllers/authors_controller');


router.get('/', authors_controller.getAllAuthors);


router.get('/:id', authors_controller.getAuthorById);

module.exports = router;
