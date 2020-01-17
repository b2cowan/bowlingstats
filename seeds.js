
const Bowler = require("./models/bowlers");
const Game = require("./models/games");

const bowlerData = [
    {
        firstName: "Bob",
        lastName: "Cowan"
    },
    {
        firstName: "Mark",
        lastName: "Cowan"
    },
    {
        firstName: "Pat",
        lastName: "Hohman"
    },
    {
        firstName: "Matt",
        lastName: "Civak"
    }
]

const gameData = [
    {
        onDate: "2020-01-15",
        laneNum: 33,
        gameNum: 1
    },
    {
        onDate: "2020-01-15",
        laneNum: 34,
        gameNum: 2
    },
    {
        onDate: "2020-01-15",
        laneNum: 33,
        gameNum: 3
    },
    
]


function seedBowlers() {
    // Remove any created bowlers 
    Bowler.deleteMany({}, function (err){
        if (err) {
            console.log(err);
        }
        console.log("removed bowlers!");
    });
   
    bowlerData.forEach(bowler => {
        Bowler.create(bowler, err => {
            if(err) { 
                console.log(err);
            }
            console.log(`Added bowler: ${bowler.firstName} ${bowler.lastName}`)
        });
    });
}

function seedGames() {
    // Remove any created bowlers 
    Game.deleteMany({}, function (err){
        if (err) {
            console.log(err);
        }
        console.log("removed games!");
    });
   
    gameData.forEach(game => {
        Game.create(game, err => {
            if(err) { 
                console.log(err);
            }
            console.log(`Added game: ${game.onDate} - Game #${game.gameNum}`)
        });
    });
}


exports.seedBowlers = seedBowlers;
exports.seedGames = seedGames;