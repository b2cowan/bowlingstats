
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Bowler = require('../models/bowlers');


//Requsting a list of all bowlers
const getBowlers = async (req, res, next) => {
    let bowlers;

    try {
        bowlers = await Bowler.find({});
    } catch (err) {
        const error = new HttpError('Fetching bowlers failed', 500);
        return next(error);
    }
    res.json({ bowlers: bowlers.map(bowler => bowler.toObject({ getters: true })) });
}


// Creating new bowlers
const createBowler = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(
            new HttpError('Invalid inputs passed, please check your data and try again.',
                422)
        );
    }

    const { firstName, lastName, CTFId } = req.body;

    let existingCTFBowler;
    try {
        existingCTFBowler = await Bowler.findOne({ CTFId: CTFId });
    } catch (err) {
        const error = new HttpError('Bowler creation failed, please try again later'
            , 422);
        return next(error)
    };

    if (existingCTFBowler) {
        const error = new HttpError('Bowler with this CTF Id already exists.', 422);
        return next(error);
    };

    const createdBowler = new Bowler({
        firstName,
        lastName,
        CTFId,
        games: []
    });

    try {
        await createdBowler.save();
    } catch (err) {
        const error = new HttpError(
            'Bowler creation failed, please try again',
            500
        );
        return next(error);
    }

    res.status(201).json({ bowler: createdBowler })
}

exports.createBowler = createBowler;
exports.getBowlers = getBowlers;