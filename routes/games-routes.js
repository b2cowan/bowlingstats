const express = require('express');
const { check } = require('express-validator');

const gamesController = require('../controllers/games-controllers');

const router = express.Router();

// Route for fetching a specific game by Id
router.get('/:gameId', gamesController.getGameById);

// Route for fetching a list of all games
router.get('/', gamesController.getGames);

// Route for adding a new game
router.post('/',
    [
        check('onDate')
            .not()
            .isEmpty()
    ],
    gamesController.createGame
);

module.exports = router;