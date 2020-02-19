
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bowlerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }, 
    CTFId: { type: String },
    games:[{
        type: Schema.Types.ObjectId,
            required: true,
            ref: 'Game'
    }]
});

module.exports = mongoose.model('Bowler', bowlerSchema);
