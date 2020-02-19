const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Game = require('../models/games');

const seasonalTeamStats = async (req, res, next) => {
    let summaryStats;

    try {
        summaryStats = await Game.aggregate(
            [
                {
                    $unwind: "$bowlerStats"
                },
                {
                    $group: {
                        _id: "$bowlerStats.bowlerId",
                        average: { "$avg": "$bowlerStats.scratchScore" },
                        highGame: { "$max": "$bowlerStats.scratchScore" },
                        lowGame: { "$min": "$bowlerStats.scratchScore" }
                    }
                },
                {
                    $lookup: {
                        from: "bowlers",
                        localField: "_id",
                        foreignField: "_id",
                        as: "bowler_details"
                    }
                },
                { $unwind: "$bowler_details" },
                {
                    $project: {
                        firstName: "$bowler_details.firstName",
                        lastName: "$bowler_details.lastName",
                        average: "$average",
                        highGame: "$highGame",
                        lowGame: "$lowGame"
                    }
                }
            ]


            // {
            //     "onDate": { $lte: "2020-02-01" }
            // }

            // [{
            //     $lookup: {
            //         from: "bowlers",
            //         localField: "bowlerStats.bowlerId",
            //         foreignField: "_id",
            //         as: "bowler_stats"
            //     }
            // },
            // { $unwind: { path: "$bowler_stats" } }]
        )
    } catch (err) {
        const error = new HttpError('Fetching games failed', 500);
        return next(error);
    }
    res.json({ summaryStats });
}



exports.seasonalTeamStats = seasonalTeamStats;