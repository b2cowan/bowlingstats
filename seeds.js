
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
    {
        onDate: "2020-02-12T00:00:00.000Z",
        laneNum: 30,
        gameNum: 1,
        bowlerStats: [
            {
                frames: [
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 40,
                        frameNum: 2
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 60,
                        frameNum: 3
                    },
                    {
                        shot1: "7",
                        shot2: "/",
                        frameScore: 80,
                        frameNum: 4
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 98,
                        frameNum: 5
                    },
                    {
                        shot1: "7",
                        shot2: "1",
                        frameScore: 106,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 125,
                        frameNum: 7
                    },
                    {
                        shot1: "8",
                        shot2: "1",
                        frameScore: 134,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 164,
                        frameNum: 9
                    },
                    {
                        shot1: "x",
                        shot2: "x",
                        shot3: "6",
                        frameScore: 190,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 1,
                scratchScore: 190,
                bowlerId: "5e2115029c91622994af9810",
                handicap: 19
            },
            {
                frames: [
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 38,
                        frameNum: 2
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 58,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 77,
                        frameNum: 4
                    },
                    {
                        shot1: "7",
                        shot2: "2",
                        frameScore: 86,
                        frameNum: 5
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 115,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 135,
                        frameNum: 7
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 155,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 183,
                        frameNum: 9
                    },
                    {
                        shot1: "x",
                        shot2: "8",
                        shot3: "0",
                        frameScore: 201,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 2,
                scratchScore: 201,
                bowlerId: "5e2115029c91622994af9813",
                handicap: 37
            },
            {
                frames: [
                    {
                        shot1: "9",
                        shot2: "0",
                        frameScore: 9,
                        frameNum: 1
                    },
                    {
                        shot1: "7",
                        shot2: "2",
                        frameScore: 18,
                        frameNum: 2
                    },
                    {
                        shot1: "9",
                        shot2: "0",
                        frameScore: 27,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 45,
                        frameNum: 4
                    },
                    {
                        shot1: "8",
                        shot2: "0",
                        frameScore: 53,
                        frameNum: 5
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 79,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 98,
                        frameNum: 7
                    },
                    {
                        shot1: "6",
                        shot2: "3",
                        frameScore: 107,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 127,
                        frameNum: 9
                    },
                    {
                        shot1: "6",
                        shot2: "/",
                        shot3: "7",
                        frameScore: 144,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 3,
                scratchScore: 144,
                bowlerId: "5e2115029c91622994af9812",
                handicap: 46
            },
            {
                frames: [
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 50,
                        frameNum: 2
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 80,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 108,
                        frameNum: 4
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 128,
                        frameNum: 5
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 148,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 178,
                        frameNum: 7
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 207,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 227,
                        frameNum: 9
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        shot3: "x",
                        frameScore: 247,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 4,
                scratchScore: 247,
                bowlerId: "5e2115029c91622994af9811",
                handicap: 0
            }
        ]
    },
    {
        onDate: "2020-02-12T00:00:00.000Z",
        laneNum: 30,
        gameNum: 2,
        bowlerStats: [
            {
                frames: [
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 40,
                        frameNum: 2
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 60,
                        frameNum: 3
                    },
                    {
                        shot1: "7",
                        shot2: "/",
                        frameScore: 80,
                        frameNum: 4
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 98,
                        frameNum: 5
                    },
                    {
                        shot1: "7",
                        shot2: "1",
                        frameScore: 106,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 125,
                        frameNum: 7
                    },
                    {
                        shot1: "8",
                        shot2: "1",
                        frameScore: 134,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 164,
                        frameNum: 9
                    },
                    {
                        shot1: "x",
                        shot2: "x",
                        shot3: "6",
                        frameScore: 190,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 1,
                scratchScore: 300,
                bowlerId: "5e2115029c91622994af9810",
                handicap: 19
            },
            {
                frames: [
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 38,
                        frameNum: 2
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 58,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 77,
                        frameNum: 4
                    },
                    {
                        shot1: "7",
                        shot2: "2",
                        frameScore: 86,
                        frameNum: 5
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 115,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 135,
                        frameNum: 7
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 155,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 183,
                        frameNum: 9
                    },
                    {
                        shot1: "x",
                        shot2: "8",
                        shot3: "0",
                        frameScore: 201,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 2,
                scratchScore: 189,
                bowlerId: "5e2115029c91622994af9813",
                handicap: 37
            },
            {
                frames: [
                    {
                        shot1: "9",
                        shot2: "0",
                        frameScore: 9,
                        frameNum: 1
                    },
                    {
                        shot1: "7",
                        shot2: "2",
                        frameScore: 18,
                        frameNum: 2
                    },
                    {
                        shot1: "9",
                        shot2: "0",
                        frameScore: 27,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 45,
                        frameNum: 4
                    },
                    {
                        shot1: "8",
                        shot2: "0",
                        frameScore: 53,
                        frameNum: 5
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 79,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 98,
                        frameNum: 7
                    },
                    {
                        shot1: "6",
                        shot2: "3",
                        frameScore: 107,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 127,
                        frameNum: 9
                    },
                    {
                        shot1: "6",
                        shot2: "/",
                        shot3: "7",
                        frameScore: 144,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 3,
                scratchScore: 100,
                bowlerId: "5e2115029c91622994af9812",
                handicap: 46
            },
            {
                frames: [
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 50,
                        frameNum: 2
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 80,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 108,
                        frameNum: 4
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 128,
                        frameNum: 5
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 148,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 178,
                        frameNum: 7
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 207,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 227,
                        frameNum: 9
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        shot3: "x",
                        frameScore: 247,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 4,
                scratchScore: 220,
                bowlerId: "5e2115029c91622994af9811",
                handicap: 0
            }
        ]
    },
    {
        onDate: "2020-02-12T00:00:00.000Z",
        laneNum: 30,
        gameNum: 3,
        bowlerStats: [
            {
                frames: [
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 40,
                        frameNum: 2
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 60,
                        frameNum: 3
                    },
                    {
                        shot1: "7",
                        shot2: "/",
                        frameScore: 80,
                        frameNum: 4
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 98,
                        frameNum: 5
                    },
                    {
                        shot1: "7",
                        shot2: "1",
                        frameScore: 106,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 125,
                        frameNum: 7
                    },
                    {
                        shot1: "8",
                        shot2: "1",
                        frameScore: 134,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 164,
                        frameNum: 9
                    },
                    {
                        shot1: "x",
                        shot2: "x",
                        shot3: "6",
                        frameScore: 190,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 1,
                scratchScore: 243,
                bowlerId: "5e2115029c91622994af9810",
                handicap: 19
            },
            {
                frames: [
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 38,
                        frameNum: 2
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 58,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 77,
                        frameNum: 4
                    },
                    {
                        shot1: "7",
                        shot2: "2",
                        frameScore: 86,
                        frameNum: 5
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 115,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 135,
                        frameNum: 7
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 155,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 183,
                        frameNum: 9
                    },
                    {
                        shot1: "x",
                        shot2: "8",
                        shot3: "0",
                        frameScore: 201,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 2,
                scratchScore: 130,
                bowlerId: "5e2115029c91622994af9813",
                handicap: 37
            },
            {
                frames: [
                    {
                        shot1: "9",
                        shot2: "0",
                        frameScore: 9,
                        frameNum: 1
                    },
                    {
                        shot1: "7",
                        shot2: "2",
                        frameScore: 18,
                        frameNum: 2
                    },
                    {
                        shot1: "9",
                        shot2: "0",
                        frameScore: 27,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 45,
                        frameNum: 4
                    },
                    {
                        shot1: "8",
                        shot2: "0",
                        frameScore: 53,
                        frameNum: 5
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 79,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 98,
                        frameNum: 7
                    },
                    {
                        shot1: "6",
                        shot2: "3",
                        frameScore: 107,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 127,
                        frameNum: 9
                    },
                    {
                        shot1: "6",
                        shot2: "/",
                        shot3: "7",
                        frameScore: 144,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 3,
                scratchScore: 290,
                bowlerId: "5e2115029c91622994af9812",
                handicap: 46
            },
            {
                frames: [
                    {
                        shot1: "9",
                        shot2: "/",
                        frameScore: 20,
                        frameNum: 1
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 50,
                        frameNum: 2
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 80,
                        frameNum: 3
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 108,
                        frameNum: 4
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 128,
                        frameNum: 5
                    },
                    {
                        shot1: "8",
                        shot2: "/",
                        frameScore: 148,
                        frameNum: 6
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 178,
                        frameNum: 7
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 207,
                        frameNum: 8
                    },
                    {
                        shot1: "x",
                        shot2: "",
                        frameScore: 227,
                        frameNum: 9
                    },
                    {
                        shot1: "9",
                        shot2: "/",
                        shot3: "x",
                        frameScore: 247,
                        frameNum: 10
                    }
                ],
                bowlOff: false,
                isAbsent: false,
                position: 4,
                scratchScore: 280,
                bowlerId: "5e2115029c91622994af9811",
                handicap: 0
            }
        ]
    }
]



function seedBowlers() {
    // Remove any created bowlers 
    Bowler.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed bowlers!");
    });

    bowlerData.forEach(bowler => {
        Bowler.create(bowler, err => {
            if (err) {
                console.log(err);
            }
            console.log(`Added bowler: ${bowler.firstName} ${bowler.lastName}`)
        });
    });
}

function seedGames() {
    // Remove any created bowlers 
    Game.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed games!");
    });

    gameData.forEach(game => {
        Game.create(game, err => {
            if (err) {
                console.log(err);
            }
            console.log(`Added game: ${game.onDate} - Game #${game.gameNum}`)
        });
    });
}


exports.seedBowlers = seedBowlers;
exports.seedGames = seedGames;