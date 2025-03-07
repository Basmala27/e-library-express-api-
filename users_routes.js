const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');


router.get('/', users_controller.getAllUsers);


router.get('/:id', users_controller.getUserById);

module.exports = router;
