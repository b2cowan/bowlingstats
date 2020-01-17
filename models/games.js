
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var gameSchema = new Schema({
    onDate: { type: Date, required: true },
    laneNum: Number,
    gameNum: Number,
    bowlerStats: [{
        bowlerId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Bowler'
        },
        handicap: Number,
        scratchScore: { type: Number, required: true },
        position: Number,
        frames: [{
            frameNum: { type: Number, required: true },
            shot1: {
                result: { type: Number, required: true },
                pinsLeft: [{ type: Number }]
            },
            shot2: {
                result: { type: Number, required: true },
                pinsLeft: [{ type: Number }]
            },
            shot3: {
                result: { type: Number, required: true },
                pinsLeft: [{ type: Number }]
            },
            frameScore: { type: Number, required: true }
        }]
    }]
});

module.exports = mongoose.model('Game', gameSchema);

