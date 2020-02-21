
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var gameSchema = new Schema({
    onDate: { type: Date, required: true },
    laneNum: Number,
    gameNum: Number,
    season: Number,
    bowlerStats: [{
        bowlerId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Bowler'
        },
        isAbsent: Boolean,
        bowlOff: Boolean,
        handicap: Number,
        scratchScore: Number,
        position: Number,
        frames: [{
            frameNum: { type: Number, required: true },
            shot1: String,
            shot2: String,
            shot3: String,
            frameScore: Number
        }]
    }]
});

module.exports = mongoose.model('Game', gameSchema);

