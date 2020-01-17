const express = require('express');
const { check } = require('express-validator');

const bowlersController = require('../controllers/bowlers-controllers');

const router = express.Router();

// Route for fetching a list of all bowlers
router.get('/', bowlersController.getBowlers);

// Route for adding a new bowler
router.post('/',
    [
        check('firstName')
            .not()
            .isEmpty(),
        check('lastName')
            .not()
            .isEmpty()
    ],
    bowlersController.createBowler
);


module.exports = router;