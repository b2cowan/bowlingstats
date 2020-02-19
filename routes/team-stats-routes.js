const express = require('express');
const { check } = require('express-validator');

const teamStatsController = require('../controllers/team-stats-controllers');

const router = express.Router();

// Route for fetching a list of all games
router.get('/', teamStatsController.seasonalTeamStats);



module.exports = router;