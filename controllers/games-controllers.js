const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Game = require('../models/games');
// const Bowler = require('../models/bowlers');

const getGames = async (req, res, next) => {
    let games;

    try {
        games = await Game.find({});
    } catch (err) {
        const error = new HttpError('Fetching games failed', 500);
        return next(error);
    }
    res.json({ games: games.map(game => game.toObject({ getters: true })) });
}

const createGame = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(
            new HttpError('Invalid inputs passed, please check your data', 422)
        );
    }

    const { onDate, laneNum, gameNum } = req.body;

    let existingGame;
    try {
        existingGame = await Game.findOne({onDate: onDate, gameNum: gameNum});
    } catch (err) {
        new HttpError('Game creation failed, try again.', 422)
    };

    if (existingGame) {
        const error = new HttpError('This game already exists.', 422);
        return next(error);
    };

    const createdGame = new Game({
        onDate, 
        laneNum, 
        gameNum,
        bowlerStats: []
    });

    try {
        await createdGame.save();
        console.log(createdGame);
    } catch (err) {
        const error = new HttpError(
            'Game creation failed, please try again',
            500
        );
        return next(error);
    }

    res.status(201).json({ game: createdGame })
}

exports.createGame = createGame;
exports.getGames = getGames;
