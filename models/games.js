
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
            shot1: String,
            shot2: String,
            shot3: String,
            frameScore: { type: Number, required: true }
        }]
    }]
});

module.exports = mongoose.model('Game', gameSchema);

