const express = require('express');

const beerFrameController = require('../controllers/beer-frame-controllers');

const router = express.Router();

// Route for fetching a list of all games
router.get('/', beerFrameController.weeklyBeerFrames);


module.exports = router;