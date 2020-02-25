const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Game = require('../models/games');

const weeklyBeerFrames = async (req, res, next) => {
    let weeklyBeerFrames;

    try {
        weeklyBeerFrames = await Game.aggregate(
            [
                {
                    $facet: {
                        "threeStrikeFrames": [
                            { $unwind: "$bowlerStats" },
                            { $unwind: "$bowlerStats.frames" },
                            // { $match: { onDate: new Date("2018-09-05T00:00:00.0Z") } },
                            {
                                $project: {
                                    gameId: "$_id",
                                    onDate: "$onDate",
                                    gameNum: "$gameNum",
                                    bowlerId: "$bowlerStats.bowlerId",
                                    position: "$bowlerStats.position",
                                    frameNum: "$bowlerStats.frames.frameNum",
                                    shot1: "$bowlerStats.frames.shot1"
                                }
                            },
                            { $sort: { gameNum: 1, frameNum: 1 } },
                            { $match: { $or: [{ shot1: "x" }, { shot1: "X" }] } },
                            {
                                $group: {
                                    _id: { onDate: "$onDate", gameNum: "$gameNum", frameNum: "$frameNum", gameId: "$gameId" },
                                    numStrikes: { "$sum": 1 }
                                }
                            },
                            { $match: { numStrikes: 3 } }
                        ],
                        "beerFramed": [
                            { $unwind: "$bowlerStats" },
                            { $unwind: "$bowlerStats.frames" },
                            // { $match: { onDate: new Date("2018-09-05T00:00:00.0Z") } },
                            {
                                $project: {
                                    _id: { onDate: "$onDate", gameNum: "$gameNum", frameNum: "$bowlerStats.frames.frameNum", gameId: "$_id" },
                                    gameId: "$_id",
                                    onDate: "$onDate",
                                    gameNum: "$gameNum",
                                    bowlerId: "$bowlerStats.bowlerId",
                                    position: "$bowlerStats.position",
                                    frameNum: "$bowlerStats.frames.frameNum",
                                    shot1: "$bowlerStats.frames.shot1"
                                }
                            },
                            { $sort: { gameNum: 1, frameNum: 1 } },
                            { $match: { shot1: { $nin: ["x", "X"] } } }
                        ],
                    }
                },
                { $unwind: "$threeStrikeFrames" },
                { $unwind: "$beerFramed" },
                {
                    $redact: {
                        $cond: [{
                            $eq: [
                                "$threeStrikeFrames._id",
                                "$beerFramed._id"
                            ]
                        },
                            "$$KEEP",
                            "$$PRUNE"
                        ]
                    }
                },
                {
                    $group: {
                        _id: { onDate: "$beerFramed.onDate", bowlerId: "$beerFramed.bowlerId" },
                        numBeerFrames: { "$sum": 1 },
                        bowlerId: { $first: "$beerFramed.bowlerId" }
                    }
                },
                {
                    $lookup: {
                        from: "bowlers",
                        localField: "bowlerId",
                        foreignField: "_id",
                        as: "bowler_details"
                    }
                },
                { $unwind: "$bowler_details" },
                {
                    $project: {
                        firstName: "$bowler_details.firstName",
                        lastName: "$bowler_details.lastName",
                        onDate: "$_id.onDate",
                        bowlerId: "$bowlerId",
                        numBeerFrames: "$numBeerFrames"
                    }
                },
                { $sort: { onDate: -1 } }
            ]
        )
    } catch (err) {
        const error = new HttpError('Fetching games failed', 500);
        return next(error);
    }
    res.json({ weeklyBeerFrames });
}



exports.weeklyBeerFrames = weeklyBeerFrames;