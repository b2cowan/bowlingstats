const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Game = require('../models/games');
// const Bowler = require('../models/bowlers');

const getGameById = async (req, res, next) => {
    const gameId = req.params.gameId;
    let game;

    try {
        game = await Game.findById(gameId)
            .populate({
                path: 'bowlerStats.bowlerId',
                model: 'Bowler'
            });
    } catch (err) {
        const error = new HttpError('Fetching games failed', 500);
        return next(error);
    }

    if (!game) {
        const error = new HttpError('Could not find game for that gameId.', 404);
        return next(error);
    }

    res.json({ game: game.toObject({ getters: true }) });
};

const getGames = async (req, res, next) => {
    let games;
    const seasonNum = req.params.seasonNum;

    try {
        games = await Game.find({ season: seasonNum })
            .populate({
                path: 'bowlerStats.bowlerId',
                model: 'Bowler'
            })
            .sort({ onDate: -1 });
    } catch (err) {
        const error = new HttpError('Fetching games failed', 500);
        return next(error);
    }
    res.json({ games: games.map(game => game.toObject({ getters: true })) });
};

const getSeasons = async (req, res, next) => {
    let seasons;

    try {
        seasons = await Game.find().distinct('season');
    } catch (err) {
        const error = new HttpError('Fetching games failed', 500);
        return next(error);
    }
    res.json({ seasons })
}

const createGame = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(
            new HttpError('Invalid inputs passed, please check your data', 422)
        );
    }

    const { onDate, laneNum, gameNum, bowlerStats, season } = req.body;

    let existingGame;
    try {
        existingGame = await Game.findOne({ onDate: onDate, gameNum: gameNum });
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
        season,
        bowlerStats
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
exports.getGameById = getGameById;
exports.getSeasons = getSeasons;
