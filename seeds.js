
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
        onDate: "2018-09-05", laneNum: 33, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 183, bowlerId: "5e2115029c91622994af9810", handicap: 32, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "3", shot2: "5", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 167, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "6", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 227, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 179, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 137, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 3, frameScore: 41, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 50, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 67, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 6, frameScore: 74, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 89, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 8, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 137, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 168, bowlerId: "5e2115029c91622994af9813", handicap: 30, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 191, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 211, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-05", laneNum: 34, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 32, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 173, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 176, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 73, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 138, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 93, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 112, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 138, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 159, bowlerId: "5e2115029c91622994af9813", handicap: 30, frames: [
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 1, frameScore: 7, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 2, frameScore: 13, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 33, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 69, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 10, frameScore: 159, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-05", laneNum: 33, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 255, bowlerId: "5e2115029c91622994af9810", handicap: 32, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 27, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 236, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 193, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 142, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 2, frameScore: 22, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 39, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 67, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 95, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 8, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 122, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 142, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 126, bowlerId: "5e2115029c91622994af9813", handicap: 30, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 63, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 81, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 90, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 109, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 118, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 126, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-12", laneNum: 33, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: true, position: 1, scratchScore: 168, bowlerId: "5e2115029c91622994af9813", handicap: 69, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-12", laneNum: 34, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: true, position: 1, scratchScore: 133, bowlerId: "5e2115029c91622994af9813", handicap: 69, frames: [
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 1, frameScore: 6, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 15, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 3, frameScore: 23, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 31, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 47, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 6, frameScore: 55, isSplit: true },
                    { shot1: "0", shot2: "9", shot3: "", frameNum: 7, frameScore: 64, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 133, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-12", laneNum: 33, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: true, position: 1, scratchScore: 199, bowlerId: "5e2115029c91622994af9813", handicap: 69, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 7, frameScore: 130, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-19", laneNum: 29, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 157, bowlerId: "5e2115029c91622994af9813", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 52, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 72, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 210, bowlerId: "5e2115029c91622994af9811", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 183, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 190, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 210, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 158, bowlerId: "5e2115029c91622994af9812", handicap: 72, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 67, isSplit: false },
                    { shot1: "0", shot2: "/", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 102, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 183, bowlerId: "5e2115029c91622994af9810", handicap: 9, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 37, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 115, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-19", laneNum: 30, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 181, bowlerId: "5e2115029c91622994af9813", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 71, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 89, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 161, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "x", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 244, bowlerId: "5e2115029c91622994af9811", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 165, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 194, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 214, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 244, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 142, bowlerId: "5e2115029c91622994af9812", handicap: 72, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 43, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 88, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 114, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 9, frameScore: 122, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 142, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 150, bowlerId: "5e2115029c91622994af9810", handicap: 9, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 114, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 141, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 150, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-19", laneNum: 29, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 183, bowlerId: "5e2115029c91622994af9813", handicap: 48, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 52, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 72, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 126, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 211, bowlerId: "5e2115029c91622994af9811", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 192, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 211, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 124, bowlerId: "5e2115029c91622994af9812", handicap: 72, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 3, frameScore: 25, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 34, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 5, frameScore: 53, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 71, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 88, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 106, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 115, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 124, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 211, bowlerId: "5e2115029c91622994af9810", handicap: 9, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 203, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 211, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-26", laneNum: 23, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 142, bowlerId: "5e2115029c91622994af9812", handicap: 80, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 45, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 7, frameScore: 99, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 117, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 126, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "6", frameNum: 10, frameScore: 142, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 171, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 132, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 235, bowlerId: "5e2115029c91622994af9810", handicap: 25, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 56, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "0", shot2: "/", shot3: "", frameNum: 7, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 235, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 200, bowlerId: "5e2115029c91622994af9811", handicap: 10, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 25, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 3, frameScore: 34, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 200, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-26", laneNum: 24, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 142, bowlerId: "5e2115029c91622994af9812", handicap: 80, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "5", shot2: "1", shot3: "", frameNum: 4, frameScore: 60, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 5, frameScore: 68, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 94, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 122, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 142, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 148, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "0", shot3: "/", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 162, bowlerId: "5e2115029c91622994af9810", handicap: 25, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 2, frameScore: 22, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 39, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 102, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 142, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 162, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 175, bowlerId: "5e2115029c91622994af9811", handicap: 10, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 115, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 175, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-09-26", laneNum: 23, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 131, bowlerId: "5e2115029c91622994af9812", handicap: 80, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 83, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 99, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 124, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 10, frameScore: 131, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 171, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 132, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 174, bowlerId: "5e2115029c91622994af9810", handicap: 25, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 72, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 4, frameScore: 78, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 126, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 154, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "x", frameNum: 10, frameScore: 174, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 225, bowlerId: "5e2115029c91622994af9811", handicap: 10, frames: [
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-03", laneNum: 19, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 242, bowlerId: "5e2115029c91622994af9811", handicap: 14, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 174, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 182, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 212, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 242, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 220, bowlerId: "5e2115029c91622994af9810", handicap: 26, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "4", frameNum: 10, frameScore: 220, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 234, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 234, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 165, bowlerId: "5e2115029c91622994af9812", handicap: 81, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 119, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 136, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 145, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 165, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-03", laneNum: 20, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 245, bowlerId: "5e2115029c91622994af9811", handicap: 14, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 199, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 218, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "2", frameNum: 10, frameScore: 245, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 188, bowlerId: "5e2115029c91622994af9810", handicap: 26, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "6", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 201, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 192, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 189, bowlerId: "5e2115029c91622994af9812", handicap: 81, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "3", frameNum: 10, frameScore: 189, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-03", laneNum: 19, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 258, bowlerId: "5e2115029c91622994af9811", handicap: 14, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 218, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 238, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 258, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 148, bowlerId: "5e2115029c91622994af9810", handicap: 26, frames: [
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 63, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 81, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 100, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 171, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 62, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 172, bowlerId: "5e2115029c91622994af9812", handicap: 81, frames: [
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 36, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-10", laneNum: 37, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 177, bowlerId: "5e2115029c91622994af9810", handicap: 29, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 8, frameScore: 138, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 177, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 223, bowlerId: "5e2115029c91622994af9811", handicap: 3, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 194, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 203, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 223, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 197, bowlerId: "5e2115029c91622994af9812", handicap: 72, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 133, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 6, frameScore: 141, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 7, frameScore: 149, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 188, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 197, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 192, bowlerId: "5e2115029c91622994af9813", handicap: 46, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 67, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-10", laneNum: 38, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 166, bowlerId: "5e2115029c91622994af9810", handicap: 29, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 75, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 166, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 208, bowlerId: "5e2115029c91622994af9811", handicap: 3, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 168, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 188, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 208, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 156, bowlerId: "5e2115029c91622994af9812", handicap: 72, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 13, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "", frameNum: 2, frameScore: 31, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 40, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 138, isSplit: true },
                    { shot1: "x", shot2: "7", shot3: "1", frameNum: 10, frameScore: 156, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 188, bowlerId: "5e2115029c91622994af9813", handicap: 46, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 48, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 57, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-10", laneNum: 37, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 178, bowlerId: "5e2115029c91622994af9810", handicap: 29, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 7, frameScore: 122, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "x", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 193, bowlerId: "5e2115029c91622994af9811", handicap: 3, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 173, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 146, bowlerId: "5e2115029c91622994af9812", handicap: 72, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 64, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 6, frameScore: 71, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 146, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 255, bowlerId: "5e2115029c91622994af9813", handicap: 46, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 86, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 235, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-17", laneNum: 25, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 203, bowlerId: "5e2115029c91622994af9810", handicap: 32, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 168, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 203, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 237, bowlerId: "5e2115029c91622994af9811", handicap: 5, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 237, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 3, scratchScore: 141, bowlerId: "5e2115029c91622994af9812", handicap: 68, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 45, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 81, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 99, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 116, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "0", frameNum: 10, frameScore: 141, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 180, bowlerId: "5e2115029c91622994af9813", handicap: 39, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 180, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-17", laneNum: 26, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 148, bowlerId: "5e2115029c91622994af9810", handicap: 32, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 55, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 92, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 140, isSplit: true },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 148, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 235, bowlerId: "5e2115029c91622994af9811", handicap: 5, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 226, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 235, isSplit: true },
                ]
            },
            {
                bowlOff: true, position: 3, scratchScore: 164, bowlerId: "5e2115029c91622994af9812", handicap: 68, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 32, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 50, isSplit: false },
                    { shot1: "3", shot2: "5", shot3: "", frameNum: 4, frameScore: 58, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 67, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 107, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 191, bowlerId: "5e2115029c91622994af9813", handicap: 39, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 127, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "7", frameNum: 10, frameScore: 191, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-17", laneNum: 25, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 255, bowlerId: "5e2115029c91622994af9810", handicap: 32, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 225, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 256, bowlerId: "5e2115029c91622994af9811", handicap: 5, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 199, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 218, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 236, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 256, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 3, scratchScore: 160, bowlerId: "5e2115029c91622994af9812", handicap: 68, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 93, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 102, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 160, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 134, bowlerId: "5e2115029c91622994af9813", handicap: 39, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 100, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 109, isSplit: false },
                    { shot1: "5", shot2: "2", shot3: "", frameNum: 8, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 125, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 134, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-24", laneNum: 32, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 204, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 204, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 213, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 175, bowlerId: "5e2115029c91622994af9812", handicap: 68, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 7, frameScore: 138, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 175, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 179, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 96, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 105, isSplit: true },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 159, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-24", laneNum: 31, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 168, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 3, frameScore: 44, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 73, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 238, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 218, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 238, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 148, bowlerId: "5e2115029c91622994af9812", handicap: 68, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 57, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 148, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 152, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 58, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 93, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 113, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 152, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-24", laneNum: 32, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 158, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 96, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 222, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 176, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 185, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 154, bowlerId: "5e2115029c91622994af9812", handicap: 68, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 52, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "4", shot2: "5", shot3: "", frameNum: 6, frameScore: 80, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 154, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 195, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "8", frameNum: 10, frameScore: 195, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-31", laneNum: 24, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 169, bowlerId: "5e2115029c91622994af9812", handicap: 67, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 9, frameScore: 160, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 191, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 133, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 191, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 212, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 192, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-31", laneNum: 23, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 144, bowlerId: "5e2115029c91622994af9812", handicap: 67, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 33, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 42, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 90, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 126, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 144, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 216, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 25, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 41, isSplit: false },
                    { shot1: "5", shot2: "1", shot3: "", frameNum: 3, frameScore: 47, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 124, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "5", shot2: "1", shot3: "", frameNum: 4, frameScore: 62, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 71, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 80, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 89, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 106, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 115, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 124, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-10-31", laneNum: 24, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 130, bowlerId: "5e2115029c91622994af9812", handicap: 67, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 3, frameScore: 27, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 4, frameScore: 36, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 64, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 103, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 112, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "8", frameNum: 10, frameScore: 130, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 225, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 186, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 90, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 186, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-14", laneNum: 28, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 199, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 227, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 82, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 201, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "6", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 157, bowlerId: "5e2115029c91622994af9812", handicap: 66, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 121, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 139, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 246, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 246, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-14", laneNum: 27, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 177, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 3, frameScore: 44, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 72, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 159, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "8", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 198, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 121, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 198, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 176, bowlerId: "5e2115029c91622994af9812", handicap: 66, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 121, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 130, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 139, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 257, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 257, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-14", laneNum: 28, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 201, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 143, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 162, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 170, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 48, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 142, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 161, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 170, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 160, bowlerId: "5e2115029c91622994af9812", handicap: 66, frames: [
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 36, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 62, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 82, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 102, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 160, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 237, bowlerId: "5e2115029c91622994af9811", handicap: 1, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 237, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-21", laneNum: 42, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 242, bowlerId: "5e2115029c91622994af9812", handicap: 65, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 222, isSplit: false },
                    { shot1: "x", shot2: "5", shot3: "/", frameNum: 10, frameScore: 242, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 207, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 127, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 174, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 74, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 82, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 121, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 130, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 139, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "6", frameNum: 10, frameScore: 174, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 43, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 3, frameScore: 50, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 69, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 78, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "4", shot2: "0", shot3: "", frameNum: 9, frameScore: 134, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-21", laneNum: 41, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 154, bowlerId: "5e2115029c91622994af9812", handicap: 65, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 75, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 135, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 154, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 183, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 64, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "9", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 1, frameScore: 7, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 145, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 183, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 146, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-21", laneNum: 42, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 181, bowlerId: "5e2115029c91622994af9812", handicap: 65, frames: [
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 103, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 138, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 165, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "6", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 257, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 257, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 225, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 156, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 185, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 175, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 100, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 146, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 155, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 175, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-28", laneNum: 34, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 204, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 175, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 204, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 141, bowlerId: "5e2115029c91622994af9812", handicap: 61, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 18, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 27, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 46, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 117, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 9, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 141, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 227, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 225, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 96, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-28", laneNum: 33, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 263, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 55, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 235, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 263, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 181, bowlerId: "5e2115029c91622994af9812", handicap: 61, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "8", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 226, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 226, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 205, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 185, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 205, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-11-28", laneNum: 34, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 182, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 125, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 182, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 187, bowlerId: "5e2115029c91622994af9812", handicap: 61, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 33, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 3, frameScore: 53, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 82, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 119, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 128, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 137, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 157, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 187, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 239, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 199, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 219, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 239, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 247, bowlerId: "5e2115029c91622994af9810", handicap: 30, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 247, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-05", laneNum: 40, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 222, bowlerId: "5e2115029c91622994af9810", handicap: 26, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 169, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 83, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 160, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 164, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 36, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 45, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 127, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 144, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 277, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 249, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 277, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-05", laneNum: 39, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 268, bowlerId: "5e2115029c91622994af9810", handicap: 26, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 248, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 268, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 227, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 157, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 6, frameScore: 90, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 129, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 157, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 258, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 258, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-05", laneNum: 40, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 205, bowlerId: "5e2115029c91622994af9810", handicap: 26, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 185, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 205, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 171, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 8, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 176, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 72, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 80, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 146, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "4", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 203, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 203, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-12", laneNum: 26, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 218, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 198, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 218, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 191, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 143, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 191, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 202, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 199, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-12", laneNum: 25, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 204, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 195, isSplit: false },
                    { shot1: "4", shot2: "5", shot3: "", frameNum: 10, frameScore: 204, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 172, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 76, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 84, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 159, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 30, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 64, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 6, frameScore: 71, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 110, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 159, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 178, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 73, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 109, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-12", laneNum: 26, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 238, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 218, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 238, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 216, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 196, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 196, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 170, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 56, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 84, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 102, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 170, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-19", laneNum: 23, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 157, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 18, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 63, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 91, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 202, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 143, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 152, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 232, bowlerId: "5e2115029c91622994af9810", handicap: 24, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 106, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 115, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 204, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 223, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 232, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 223, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "0", frameNum: 10, frameScore: 223, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-19", laneNum: 24, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 167, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 82, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 101, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 167, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 270, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 210, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 240, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 270, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 188, bowlerId: "5e2115029c91622994af9810", handicap: 24, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 51, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "5", shot2: "2", shot3: "", frameNum: 5, frameScore: 75, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 161, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 222, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 107, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 125, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 164, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 202, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2018-12-19", laneNum: 23, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 146, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "5", shot3: "3", frameNum: 10, frameScore: 146, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 177, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 2, frameScore: 16, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 81, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 177, bowlerId: "5e2115029c91622994af9810", handicap: 24, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 129, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 138, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 138, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 27, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 66, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 112, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 130, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 138, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-02", laneNum: 33, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 206, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 187, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "9", frameNum: 10, frameScore: 206, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 247, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 199, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 190, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 207, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-02", laneNum: 34, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 123, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 4, frameScore: 44, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 53, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 71, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 7, frameScore: 79, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 97, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 115, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 123, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 226, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 138, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 217, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 226, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 165, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 56, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 91, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 100, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 148, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 165, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 167, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 151, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "6", frameNum: 10, frameScore: 167, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-02", laneNum: 33, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 149, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 27, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 36, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 44, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 63, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 72, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 92, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 149, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 234, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 234, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 224, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 224, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 192, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 102, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-09", laneNum: 39, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 225, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 168, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "5", shot3: "3", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 201, bowlerId: "5e2115029c91622994af9810", handicap: 24, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 135, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 7, frameScore: 143, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 162, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 106, bowlerId: "5e2115029c91622994af9813", handicap: 36, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 37, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 46, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 55, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 64, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 73, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 82, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 9, frameScore: 88, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "8", frameNum: 10, frameScore: 106, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 138, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "3", shot2: "5", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 26, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 35, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "", frameNum: 5, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 81, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 101, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 129, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 138, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-09", laneNum: 40, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 202, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 172, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 24, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 193, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 224, bowlerId: "5e2115029c91622994af9813", handicap: 36, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 146, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 175, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 224, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 166, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 72, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 107, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 8, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 166, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-09", laneNum: 39, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 160, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 105, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 114, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 134, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 160, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 235, bowlerId: "5e2115029c91622994af9810", handicap: 24, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 235, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 169, bowlerId: "5e2115029c91622994af9813", handicap: 36, frames: [
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 1, frameScore: 7, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 160, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 216, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 168, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-16", laneNum: 39, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 2, scratchScore: 233, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 160, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 206, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 215, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 233, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 217, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 217, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 204, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 67, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 204, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-16", laneNum: 40, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 2, scratchScore: 224, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 224, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 255, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 184, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 176, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 184, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-16", laneNum: 39, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 2, scratchScore: 187, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 83, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 103, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 123, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 140, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 158, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "/", frameNum: 10, frameScore: 187, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 169, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 82, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 5, frameScore: 90, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 110, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 9, frameScore: 152, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 255, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-23", laneNum: 21, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 228, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 208, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 228, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 185, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "0", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 88, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 116, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 185, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 128, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 91, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 110, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 119, isSplit: false },
                    { shot1: "3", shot2: "6", shot3: "", frameNum: 10, frameScore: 128, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 218, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 139, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 218, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-23", laneNum: 22, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 171, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 171, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 219, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 138, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 153, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 7, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 191, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 210, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 219, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 156, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 94, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 118, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 156, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 213, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 67, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 213, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-23", laneNum: 21, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 214, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 214, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 189, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 142, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 161, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 180, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 189, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 176, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 9, frameScore: 157, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 247, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 168, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 218, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-30", laneNum: 38, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 162, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 71, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 90, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 130, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 162, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 267, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 210, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 239, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 258, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 267, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 178, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "/", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 246, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 198, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 207, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 246, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-30", laneNum: 37, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 171, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 84, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 93, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 207, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 212, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 132, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 172, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 192, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 158, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 84, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 138, isSplit: true },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-01-30", laneNum: 38, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 194, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 194, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 213, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 203, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 185, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 203, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 141, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 37, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 46, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 54, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 63, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 81, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 101, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 141, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-06", laneNum: 34, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 116, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 35, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 61, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 89, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 98, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 116, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 236, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 216, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 236, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 178, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "/", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-06", laneNum: 33, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 161, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 77, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 135, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 143, isSplit: true },
                    { shot1: "x", shot2: "5", shot3: "3", frameNum: 10, frameScore: 161, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 276, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 249, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 276, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 197, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 77, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 93, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 5, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 131, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 139, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 197, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-06", laneNum: 34, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 126, bowlerId: "5e2115029c91622994af9812", handicap: 58, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 16, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 25, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 45, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 91, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 8, frameScore: 98, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 126, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 174, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 3, frameScore: 46, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 94, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 174, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 216, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 159, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 196, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-13", laneNum: 20, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 212, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 212, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 192, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 236, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 196, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 216, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 236, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 134, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 92, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 108, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 9, frameScore: 115, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 134, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-13", laneNum: 19, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 237, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 218, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 237, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 247, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 221, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 167, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 204, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "7", frameNum: 10, frameScore: 221, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 202, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 145, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-13", laneNum: 20, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 277, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 77, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 217, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 247, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 277, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 190, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 193, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 115, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 163, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 173, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 143, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "0", frameNum: 10, frameScore: 173, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-20", laneNum: 38, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 186, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 127, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 146, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "5", shot3: "/", frameNum: 10, frameScore: 186, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 159, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 54, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 73, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 82, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 121, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 159, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 196, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 146, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 196, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 235, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 235, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-20", laneNum: 37, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 173, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 212, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 72, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 160, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 55, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 143, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "7", frameNum: 10, frameScore: 160, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 213, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 114, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-20", laneNum: 38, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 189, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 74, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 161, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 180, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 189, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 75, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 100, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 156, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 162, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 47, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 75, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 114, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 153, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 162, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 192, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-27", laneNum: 36, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 162, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 85, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 114, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 153, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 162, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 135, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 25, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 73, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 99, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 108, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 117, isSplit: true },
                    { shot1: "x", shot2: "0", shot3: "8", frameNum: 10, frameScore: 135, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 237, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 217, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 237, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 212, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 98, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-27", laneNum: 35, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 197, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 44, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 3, frameScore: 52, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 61, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 81, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 118, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 168, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 197, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 148, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 104, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 203, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 185, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 203, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 160, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 84, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 8, frameScore: 121, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 160, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-02-27", laneNum: 36, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 176, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 27, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "7", shot2: "", shot3: "", frameNum: 7, frameScore: 108, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 160, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 62, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 69, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 89, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 134, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 142, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "8", frameNum: 10, frameScore: 160, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 207, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 100, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 139, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 148, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 195, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 131, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 139, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 176, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 195, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-06", laneNum: 40, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 158, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 111, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 215, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 215, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 178, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 140, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 149, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 158, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 171, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 45, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 92, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-06", laneNum: 39, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 148, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 55, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 83, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 121, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 129, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 191, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 191, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 238, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 169, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 188, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 208, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 238, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 178, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "5", shot2: "", shot3: "", frameNum: 3, frameScore: 40, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 80, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 119, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-06", laneNum: 40, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 173, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 103, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 148, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "1", frameNum: 10, frameScore: 173, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 238, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 199, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 238, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 244, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 225, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 244, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 276, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 199, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 249, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 276, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-13", laneNum: 30, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 202, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 164, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 147, isSplit: true },
                    { shot1: "x", shot2: "6", shot3: "1", frameNum: 10, frameScore: 164, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 172, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 3, frameScore: 46, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 129, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 5, frameScore: 62, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 79, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 7, frameScore: 86, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 114, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "5", frameNum: 10, frameScore: 129, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-13", laneNum: 29, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 194, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 194, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 152, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 143, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 152, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 203, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 146, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 185, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "1", frameNum: 10, frameScore: 203, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 150, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 17, isSplit: true },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 3, frameScore: 25, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 34, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 52, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 71, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 90, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 130, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 150, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-13", laneNum: 30, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 186, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 180, isSplit: false },
                    { shot1: "3", shot2: "3", shot3: "", frameNum: 10, frameScore: 186, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 179, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 162, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 178, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 10, frameScore: 178, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 142, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 25, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 61, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 78, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 7, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 122, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 142, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-20", laneNum: 33, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 200, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 200, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 181, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 167, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 121, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 139, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 167, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 236, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 118, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 236, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-20", laneNum: 34, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 188, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 151, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 170, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 179, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 152, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 8, frameScore: 117, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "7", frameNum: 10, frameScore: 152, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 193, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 172, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 6, frameScore: 93, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-20", laneNum: 33, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 172, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 120, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 172, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 210, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 74, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 142, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 191, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 210, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 143, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 25, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 62, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 80, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 124, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "9", frameNum: 10, frameScore: 143, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 246, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 167, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 217, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 246, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-27", laneNum: 35, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 185, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 185, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 178, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 131, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 178, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 266, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 238, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 266, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 246, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 137, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 226, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 246, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-27", laneNum: 36, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 213, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 156, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 185, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 204, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 169, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 129, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 268, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 248, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 268, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 247, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 169, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 209, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 247, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-03-27", laneNum: 35, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 163, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 52, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 4, frameScore: 70, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 79, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 99, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 154, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 163, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 145, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 119, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 137, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 145, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 246, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 226, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 246, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 222, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 4, frameScore: 86, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 203, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 222, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-03", laneNum: 31, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 166, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 45, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 3, frameScore: 53, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 4, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 166, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 227, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 197, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 170, isSplit: false },
                    { shot1: "4", shot2: "3", shot3: "", frameNum: 9, frameScore: 177, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 197, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 173, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "/", frameNum: 10, frameScore: 173, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-03", laneNum: 32, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 149, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 33, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 93, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 141, isSplit: true },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 10, frameScore: 149, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 220, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 157, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 166, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 194, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 212, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 220, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 207, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 190, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "1", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 160, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 125, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 143, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 151, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 10, frameScore: 160, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-03", laneNum: 31, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 188, bowlerId: "5e2115029c91622994af9812", handicap: 60, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "7", frameNum: 10, frameScore: 188, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 188, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 4, frameScore: 63, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 159, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 169, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 135, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 9, frameScore: 152, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "7", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 33, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 96, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 155, isSplit: false },
                    { shot1: "0", shot2: "9", shot3: "", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-10", laneNum: 25, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 279, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 249, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 279, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 192, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 143, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 188, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 150, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 169, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 177, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: true },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 72, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 90, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "9", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-10", laneNum: 26, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 256, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 209, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 229, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 247, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 256, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 193, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 201, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 126, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 135, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 9, frameScore: 181, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 141, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "3", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 34, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 51, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 59, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 87, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 133, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 141, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-10", laneNum: 25, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 228, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 106, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 202, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 220, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 228, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 173, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 64, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 173, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 182, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 37, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 173, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 182, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 169, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 1, frameScore: 7, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 16, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 36, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-17", laneNum: 30, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 255, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "7", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 233, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 213, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "/", frameNum: 10, frameScore: 233, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 188, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 71, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 80, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-17", laneNum: 29, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 205, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 48, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 146, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 186, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "9", frameNum: 10, frameScore: 205, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 289, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 210, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 240, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 269, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 289, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 170, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 93, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 150, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 170, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-17", laneNum: 30, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 233, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 160, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 205, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 213, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 233, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 216, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 197, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 191, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 175, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 10, frameScore: 191, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-24", laneNum: 37, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 2, scratchScore: 222, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 144, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 153, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 182, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 202, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 223, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 203, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 223, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 209, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 82, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 91, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 190, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 209, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-24", laneNum: 38, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 148, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 64, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 73, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 88, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 8, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 198, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 95, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 104, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 171, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 179, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 198, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 268, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 209, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 239, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 268, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 152, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 33, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 42, isSplit: true },
                    { shot1: "5", shot2: "2", shot3: "", frameNum: 4, frameScore: 49, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 58, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 66, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 85, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 152, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-04-24", laneNum: 37, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 190, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 4, frameScore: 90, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "X", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 247, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "X", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 5, frameScore: 130, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 6, frameScore: 160, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 7, frameScore: 190, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 9, frameScore: 238, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 169, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 111, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 9, frameScore: 149, isSplit: false },
                    { shot1: "X", shot2: "9", shot3: "/", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 148, bowlerId: "5e2115029c91622994af9813", handicap: 34, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 27, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 3, frameScore: 34, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 43, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 52, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 6, frameScore: 59, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 79, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 8, frameScore: 108, isSplit: false },
                    { shot1: "X", shot2: "", shot3: "", frameNum: 9, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "X", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-05-01", laneNum: 23, gameNum: 1, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 187, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 178, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 187, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 205, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 205, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 241, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 113, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 143, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 191, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 211, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 241, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 195, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 195, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-05-01", laneNum: 24, gameNum: 2, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 131, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 99, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 7, frameScore: 106, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 123, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 131, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 202, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 248, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 169, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 209, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 229, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 248, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 197, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 170, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 188, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 197, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-05-01", laneNum: 23, gameNum: 3, season: 1, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 131, bowlerId: "5e2115029c91622994af9812", handicap: 59, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 46, isSplit: true },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 5, frameScore: 54, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 63, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 83, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 102, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 131, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 157, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 43, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 51, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 129, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 233, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 155, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 183, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 203, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 233, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 132, bowlerId: "5e2115029c91622994af9813", handicap: 35, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 52, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 59, isSplit: true },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 6, frameScore: 68, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 93, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 132, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-04", laneNum: 27, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 159, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 36, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 150, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 159, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 157, bowlerId: "5e2115029c91622994af9813", handicap: 61, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 3, frameScore: 46, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 231, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 64, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 72, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 191, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 211, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 231, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 185, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 185, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-04", laneNum: 28, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 213, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 181, bowlerId: "5e2115029c91622994af9813", handicap: 61, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 34, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 43, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "0", shot2: "4", shot3: "", frameNum: 8, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "1", frameNum: 10, frameScore: 181, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 231, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 164, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 173, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 203, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 231, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 245, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 217, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 236, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 245, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-04", laneNum: 27, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 143, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 11, isSplit: false },
                    { shot1: "1", shot2: "2", shot3: "", frameNum: 2, frameScore: 14, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 41, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 60, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 69, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 109, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 126, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 134, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 143, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 139, bowlerId: "5e2115029c91622994af9813", handicap: 61, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 36, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 6, frameScore: 82, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 91, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 130, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 139, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 269, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 209, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 229, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 249, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "/", frameNum: 10, frameScore: 269, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 165, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 156, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 165, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-11", laneNum: 5, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: true, position: 1, scratchScore: 144, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 120, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 137, isSplit: false },
                    { shot1: "5", shot2: "2", shot3: "", frameNum: 10, frameScore: 144, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 2, scratchScore: 117, bowlerId: "5e2115029c91622994af9813", handicap: 61, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 3, frameScore: 24, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 43, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 52, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 6, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 69, isSplit: false },
                    { shot1: "0", shot2: "/", shot3: "", frameNum: 8, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 108, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 117, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 3, scratchScore: 258, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 198, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 218, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 238, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 258, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 4, scratchScore: 172, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 85, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 142, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-11", laneNum: 6, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: true, position: 1, scratchScore: 181, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 2, scratchScore: 159, bowlerId: "5e2115029c91622994af9813", handicap: 61, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 73, isSplit: false },
                    { shot1: "0", shot2: "/", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 159, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 3, scratchScore: 207, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 129, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 169, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 188, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 4, scratchScore: 188, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 5, frameScore: 59, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-11", laneNum: 5, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: true, position: 1, scratchScore: 209, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 201, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 10, frameScore: 209, isSplit: true },
                ]
            },
            {
                bowlOff: true, position: 2, scratchScore: 185, bowlerId: "5e2115029c91622994af9813", handicap: 61, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 71, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 90, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 6, frameScore: 99, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "", frameNum: 7, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 165, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "x", frameNum: 10, frameScore: 185, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 3, scratchScore: 268, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 248, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 268, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 4, scratchScore: 181, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-18", laneNum: 30, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 1, frameScore: 7, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 125, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 173, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 64, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 144, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 164, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 185, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 110, isSplit: false },
                    { shot1: "2", shot2: "/", shot3: "", frameNum: 7, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 147, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 185, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 239, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 149, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 209, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 239, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-18", laneNum: 29, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 142, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 6, frameScore: 89, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 10, frameScore: 142, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 163, bowlerId: "5e2115029c91622994af9813", handicap: 64, frames: [
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 25, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 3, frameScore: 32, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 79, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 117, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 125, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 163, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 177, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 74, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 91, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 109, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 148, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 259, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 160, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 209, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 229, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 259, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-18", laneNum: 30, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 234, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 234, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 125, bowlerId: "5e2115029c91622994af9813", handicap: 64, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "3", shot2: "5", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 52, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 60, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 69, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 78, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 125, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 168, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "3", shot2: "/", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 149, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "9", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 236, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 236, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-25", laneNum: 29, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 222, bowlerId: "5e2115029c91622994af9812", handicap: 45, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 194, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 213, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 198, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 142, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 160, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 168, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 198, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 198, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 106, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 114, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 134, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 171, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 179, isSplit: true },
                    { shot1: "x", shot2: "6", shot3: "3", frameNum: 10, frameScore: 198, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 4, scratchScore: 241, bowlerId: "5e2115029c91622994af9813", handicap: 66, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 143, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 172, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 192, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 212, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 241, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-25", laneNum: 30, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 181, bowlerId: "5e2115029c91622994af9812", handicap: 45, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 264, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 245, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "3", frameNum: 10, frameScore: 264, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 225, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 166, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 185, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 4, scratchScore: 189, bowlerId: "5e2115029c91622994af9813", handicap: 66, frames: [
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 143, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 181, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 189, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-09-25", laneNum: 29, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 171, bowlerId: "5e2115029c91622994af9812", handicap: 45, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 53, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 119, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 128, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 152, isSplit: true },
                    { shot1: "x", shot2: "6", shot3: "3", frameNum: 10, frameScore: 171, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 207, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 129, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 168, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 188, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 207, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 257, bowlerId: "5e2115029c91622994af9810", handicap: 31, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 209, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 228, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 237, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 257, isSplit: false },
                ]
            },
            {
                bowlOff: true, position: 4, scratchScore: 195, bowlerId: "5e2115029c91622994af9813", handicap: 66, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 175, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 195, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-03", laneNum: 27, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 226, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 147, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 226, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 180, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 91, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 180, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 181, bowlerId: "5e2115029c91622994af9813", handicap: 53, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 161, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 192, bowlerId: "5e2115029c91622994af9812", handicap: 41, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 143, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-03", laneNum: 28, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 244, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 244, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 201, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 84, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 161, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 181, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 179, bowlerId: "5e2115029c91622994af9813", handicap: 53, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 35, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 139, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 159, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 222, bowlerId: "5e2115029c91622994af9812", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 203, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-03", laneNum: 27, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 196, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 196, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 216, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 136, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 169, bowlerId: "5e2115029c91622994af9813", handicap: 53, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 4, frameScore: 54, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 5, frameScore: 63, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 83, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 101, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 121, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 154, bowlerId: "5e2115029c91622994af9812", handicap: 41, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 117, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 154, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-09", laneNum: 42, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 227, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 168, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 188, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 193, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 143, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 193, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 157, bowlerId: "5e2115029c91622994af9813", handicap: 51, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 2, frameScore: 16, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 141, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 150, isSplit: true },
                    { shot1: "5", shot2: "2", shot3: "", frameNum: 10, frameScore: 157, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-09", laneNum: 41, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 245, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 168, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 187, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 206, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 225, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 245, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 244, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 199, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 218, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 244, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 51, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 67, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 92, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "0", frameNum: 10, frameScore: 164, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-09", laneNum: 42, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 201, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 132, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 203, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 203, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 179, bowlerId: "5e2115029c91622994af9813", handicap: 51, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-16", laneNum: 45, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 156, bowlerId: "5e2115029c91622994af9812", handicap: 39, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 75, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 119, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "7", frameNum: 10, frameScore: 156, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 279, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 249, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 279, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 172, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 159, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 150, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 159, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-16", laneNum: 46, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 168, bowlerId: "5e2115029c91622994af9812", handicap: 39, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 149, isSplit: true },
                    { shot1: "0", shot2: "/", shot3: "9", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 217, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 138, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 188, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 217, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 205, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 1, frameScore: 7, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 185, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 205, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 229, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 63, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 4, frameScore: 71, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 79, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 199, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 229, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-16", laneNum: 45, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 179, bowlerId: "5e2115029c91622994af9812", handicap: 39, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 95, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 113, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 121, isSplit: false },
                    { shot1: "0", shot2: "9", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 300, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 210, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 240, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 270, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 300, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 151, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 64, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 142, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 151, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 188, bowlerId: "5e2115029c91622994af9813", handicap: 52, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 85, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 162, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 9, frameScore: 170, isSplit: true },
                    { shot1: "x", shot2: "8", shot3: "0", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-23", laneNum: 27, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 186, bowlerId: "5e2115029c91622994af9813", handicap: 48, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 69, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 127, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 136, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 186, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 156, bowlerId: "5e2115029c91622994af9812", handicap: 41, frames: [
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 37, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 147, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 156, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 190, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 133, isSplit: true },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 141, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 244, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 56, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 216, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 244, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-23", laneNum: 28, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 199, bowlerId: "5e2115029c91622994af9813", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 56, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 5, frameScore: 82, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 157, bowlerId: "5e2115029c91622994af9812", handicap: 41, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "0", shot2: "9", shot3: "", frameNum: 6, frameScore: 85, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 7, frameScore: 92, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "7", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 279, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 210, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 239, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 259, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 279, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 177, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 100, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 140, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 159, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 168, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-23", laneNum: 27, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 172, bowlerId: "5e2115029c91622994af9813", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 66, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 101, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 117, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 8, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 191, bowlerId: "5e2115029c91622994af9812", handicap: 41, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "0", shot2: "9", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 191, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 234, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 225, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 234, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 225, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 225, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-30", laneNum: 23, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 201, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 201, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 190, bowlerId: "5e2115029c91622994af9813", handicap: 47, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 112, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 189, bowlerId: "5e2115029c91622994af9812", handicap: 43, frames: [
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 179, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "0", frameNum: 10, frameScore: 189, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 222, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 204, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "1", frameNum: 10, frameScore: 222, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-30", laneNum: 24, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 224, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 126, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 224, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 179, bowlerId: "5e2115029c91622994af9813", handicap: 47, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 73, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 82, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 100, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 140, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 160, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 161, bowlerId: "5e2115029c91622994af9812", handicap: 43, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 141, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 161, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 245, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 165, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 185, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 245, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-10-30", laneNum: 23, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 202, bowlerId: "5e2115029c91622994af9810", handicap: 21, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 108, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "2", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 202, bowlerId: "5e2115029c91622994af9813", handicap: 47, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 158, bowlerId: "5e2115029c91622994af9812", handicap: 43, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 56, isSplit: false },
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 5, frameScore: 63, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 81, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 90, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 99, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 257, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 168, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 257, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-06", laneNum: 25, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 226, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 47, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 226, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 180, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 55, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 121, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 161, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 180, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 185, bowlerId: "5e2115029c91622994af9813", handicap: 45, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 56, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 96, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 165, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 185, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 210, bowlerId: "5e2115029c91622994af9812", handicap: 44, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 171, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 190, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 210, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-06", laneNum: 26, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 236, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 236, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 181, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 96, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 105, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 133, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 181, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 201, bowlerId: "5e2115029c91622994af9813", handicap: 45, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 45, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 63, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 72, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 81, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 202, bowlerId: "5e2115029c91622994af9812", handicap: 44, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 35, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 202, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-06", laneNum: 25, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 206, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 67, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 206, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 155, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 1, frameScore: 6, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 24, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 43, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 61, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 69, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 127, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 146, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 155, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 199, bowlerId: "5e2115029c91622994af9813", handicap: 45, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 142, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 170, bowlerId: "5e2115029c91622994af9812", handicap: 44, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 55, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 75, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 170, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-13", laneNum: 41, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 147, bowlerId: "5e2115029c91622994af9812", handicap: 42, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 42, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 50, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 67, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 120, isSplit: false },
                    { shot1: "3", shot2: "4", shot3: "", frameNum: 9, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 147, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 162, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 153, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 162, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 160, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 43, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 3, frameScore: 50, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 58, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 160, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 184, bowlerId: "5e2115029c91622994af9813", handicap: 43, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 116, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 125, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 160, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 9, frameScore: 168, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "6", frameNum: 10, frameScore: 184, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-13", laneNum: 42, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 161, bowlerId: "5e2115029c91622994af9812", handicap: 42, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 48, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 123, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 142, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 161, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 226, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 42, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 57, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 197, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 226, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 205, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 157, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 205, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 209, bowlerId: "5e2115029c91622994af9813", handicap: 43, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 171, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 209, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-13", laneNum: 41, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 166, bowlerId: "5e2115029c91622994af9812", handicap: 42, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "3", shot2: "6", shot3: "", frameNum: 8, frameScore: 142, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 159, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 10, frameScore: 166, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 168, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 74, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 4, frameScore: 81, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 90, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 99, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 108, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 223, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 223, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 231, bowlerId: "5e2115029c91622994af9813", handicap: 43, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 213, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 231, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-20", laneNum: 47, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: true, position: 3, scratchScore: 160, bowlerId: "5e2115029c91622994af9813", handicap: 39, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 35, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 74, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 6, frameScore: 83, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 160, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-20", laneNum: 48, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: true, position: 3, scratchScore: 157, bowlerId: "5e2115029c91622994af9813", handicap: 39, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 91, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 131, isSplit: false },
                    { shot1: "4", shot2: "/", shot3: "", frameNum: 9, frameScore: 149, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 157, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-20", laneNum: 47, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: true, position: 3, scratchScore: 192, bowlerId: "5e2115029c91622994af9813", handicap: 39, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 105, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 173, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-27", laneNum: 36, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 133, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 1, frameScore: 7, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 25, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 34, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 51, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 58, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 77, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 96, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 105, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 114, isSplit: true },
                    { shot1: "6", shot2: "/", shot3: "9", frameNum: 10, frameScore: 133, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 126, bowlerId: "5e2115029c91622994af9812", handicap: 44, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 55, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 75, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 93, isSplit: false },
                    { shot1: "0", shot2: "8", shot3: "", frameNum: 8, frameScore: 101, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 117, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 10, frameScore: 126, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 247, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 199, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 228, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 213, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 1, frameScore: 7, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 116, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 195, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-27", laneNum: 35, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 204, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 204, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 168, bowlerId: "5e2115029c91622994af9812", handicap: 44, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 84, isSplit: true },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 91, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 110, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 126, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 160, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 181, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 156, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 10, frameScore: 181, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 225, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "x", shot2: "6", shot3: "3", frameNum: 10, frameScore: 225, isSplit: true },
                ]
            },
        ]
    },
    {
        onDate: "2019-11-27", laneNum: 36, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 188, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 161, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 9, frameScore: 168, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 191, bowlerId: "5e2115029c91622994af9812", handicap: 44, frames: [
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 1, frameScore: 6, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 94, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 123, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 142, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 191, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 176, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 33, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 148, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 9, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 252, bowlerId: "5e2115029c91622994af9810", handicap: 23, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 212, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 232, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "x", frameNum: 10, frameScore: 252, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-04", laneNum: 34, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 243, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 136, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 144, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 203, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 223, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 243, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 71, isSplit: false },
                    { shot1: "5", shot2: "2", shot3: "", frameNum: 5, frameScore: 78, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 97, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 106, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 115, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 164, bowlerId: "5e2115029c91622994af9812", handicap: 45, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 54, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 4, frameScore: 62, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 81, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 90, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 107, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 8, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 227, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-04", laneNum: 33, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 187, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 82, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 101, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 110, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 129, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 187, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 175, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 86, isSplit: true },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 149, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 158, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "7", frameNum: 10, frameScore: 175, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 164, bowlerId: "5e2115029c91622994af9812", handicap: 45, frames: [
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 1, frameScore: 8, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 16, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 25, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 53, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 155, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 234, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 75, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 234, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-04", laneNum: 34, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 209, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 5, frameScore: 82, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 181, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 209, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 180, bowlerId: "5e2115029c91622994af9813", handicap: 41, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 171, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 180, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 192, bowlerId: "5e2115029c91622994af9812", handicap: 45, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 175, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "7", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 208, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 208, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-11", laneNum: 38, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 235, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 206, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 215, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 235, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 178, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 84, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 5, frameScore: 92, isSplit: true },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 100, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 148, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 233, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 196, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 216, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "7", frameNum: 10, frameScore: 233, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 103, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "3", shot2: "3", shot3: "", frameNum: 3, frameScore: 23, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 32, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 51, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 60, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 78, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 86, isSplit: true },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 94, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 10, frameScore: 103, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-11", laneNum: 37, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 227, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 227, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 186, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 114, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 131, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 7, frameScore: 138, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 157, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 186, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 179, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 85, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 94, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 112, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 132, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 151, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 160, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "9", frameNum: 10, frameScore: 179, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 212, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 184, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-11", laneNum: 38, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 266, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 170, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 200, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 226, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 246, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "x", frameNum: 10, frameScore: 266, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 183, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 192, bowlerId: "5e2115029c91622994af9813", handicap: 42, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 57, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 175, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "7", frameNum: 10, frameScore: 192, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 158, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 148, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "0", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-18", laneNum: 32, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 187, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 2, frameScore: 22, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 40, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 79, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 88, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 138, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 187, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 191, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 161, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 191, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 204, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 81, isSplit: false },
                    { shot1: "5", shot2: "0", shot3: "", frameNum: 5, frameScore: 86, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 114, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 204, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 220, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 196, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 213, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 10, frameScore: 220, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-18", laneNum: 31, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 189, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 48, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 172, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "7", frameNum: 10, frameScore: 189, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 255, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 208, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 227, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 236, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 168, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 83, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 102, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 6, frameScore: 111, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 7, frameScore: 120, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 178, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 81, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "2", frameNum: 10, frameScore: 178, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2019-12-18", laneNum: 32, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 137, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 27, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 112, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 121, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 130, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 10, frameScore: 137, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 206, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 167, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 206, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 176, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 6, frameScore: 94, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 109, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 176, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 177, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 78, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 105, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 8, frameScore: 130, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-08", laneNum: 46, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 220, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 56, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 74, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 4, frameScore: 82, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 112, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 141, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 161, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 180, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 200, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 220, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 124, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 16, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 2, frameScore: 24, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 43, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 52, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 61, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 78, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 7, frameScore: 87, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 106, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 115, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 10, frameScore: 124, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 211, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 9, frameScore: 181, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 211, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 238, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 198, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 218, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 238, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-08", laneNum: 45, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 158, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 74, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 102, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 158, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 157, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 70, isSplit: false },
                    { shot1: "3", shot2: "5", shot3: "", frameNum: 5, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 95, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 119, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 9, frameScore: 127, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 157, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 182, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 104, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 182, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 213, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 123, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 143, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-08", laneNum: 46, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 232, bowlerId: "5e2115029c91622994af9813", handicap: 40, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 85, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 213, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 232, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 177, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 47, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 83, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 103, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 149, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 211, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 163, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 211, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 233, bowlerId: "5e2115029c91622994af9810", handicap: 22, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 3, frameScore: 55, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 85, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 145, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 174, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 194, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 213, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 233, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-15", laneNum: 43, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 247, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 169, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 208, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 137, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 2, frameScore: 26, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 35, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 72, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 92, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 111, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 120, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 128, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 10, frameScore: 137, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 233, bowlerId: "5e2115029c91622994af9812", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "5", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 140, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "6", frameNum: 10, frameScore: 233, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 280, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 70, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 100, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 160, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 190, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 220, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 250, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 280, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-15", laneNum: 44, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 266, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 189, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 219, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 246, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "/", frameNum: 10, frameScore: 266, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 168, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 43, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 4, frameScore: 51, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 133, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 9, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 150, bowlerId: "5e2115029c91622994af9812", handicap: 48, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 17, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 2, frameScore: 25, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 44, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 63, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 82, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 98, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 7, frameScore: 107, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 122, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 9, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "1", frameNum: 10, frameScore: 150, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 278, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 120, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 150, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 210, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 239, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 259, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 278, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-15", laneNum: 43, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 226, bowlerId: "5e2115029c91622994af9810", handicap: 20, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 168, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 187, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "0", frameNum: 10, frameScore: 226, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 255, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 85, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 165, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 225, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 255, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 191, bowlerId: "5e2115029c91622994af9812", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 26, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 46, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 3, frameScore: 65, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 104, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 130, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 8, frameScore: 154, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 9, frameScore: 163, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 191, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 212, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 119, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "8", frameNum: 10, frameScore: 212, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-22", laneNum: 28, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 210, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 8, frameScore: 161, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 190, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 210, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 200, bowlerId: "5e2115029c91622994af9810", handicap: 17, frames: [
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 152, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 180, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 200, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 190, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 96, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 114, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 153, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 9, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 148, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 47, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 55, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 64, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 84, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 103, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 122, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 140, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 148, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-22", laneNum: 27, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 169, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "0", shot2: "7", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 8, frameScore: 132, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 149, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "x", frameNum: 10, frameScore: 169, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 172, bowlerId: "5e2115029c91622994af9810", handicap: 17, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 96, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 115, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 8, frameScore: 124, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 152, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 172, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 195, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 66, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 86, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 175, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 195, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 135, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 2, frameScore: 17, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 26, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 82, isSplit: false },
                    { shot1: "7", shot2: "0", shot3: "", frameNum: 7, frameScore: 89, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 109, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 127, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 10, frameScore: 135, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-22", laneNum: 28, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 221, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 29, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 117, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 204, isSplit: false },
                    { shot1: "x", shot2: "7", shot3: "0", frameNum: 10, frameScore: 221, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 200, bowlerId: "5e2115029c91622994af9810", handicap: 17, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 56, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 4, frameScore: 65, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 95, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 172, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 9, frameScore: 181, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "9", frameNum: 10, frameScore: 200, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 1, frameScore: 9, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 58, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 76, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 96, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 155, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 134, bowlerId: "5e2115029c91622994af9812", handicap: 47, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 63, isSplit: true },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 5, frameScore: 71, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 7, frameScore: 97, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 106, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 134, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-29", laneNum: 24, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 188, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 78, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 147, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 163, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 180, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 202, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 109, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 167, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 176, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 194, isSplit: false },
                    { shot1: "5", shot2: "3", shot3: "", frameNum: 10, frameScore: 202, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 229, bowlerId: "5e2115029c91622994af9810", handicap: 18, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 106, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 114, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 144, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 172, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 192, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 210, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "9", frameNum: 10, frameScore: 229, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 183, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 116, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 145, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-29", laneNum: 23, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 199, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 163, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "6", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 235, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 57, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 86, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 126, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 215, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 235, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 183, bowlerId: "5e2115029c91622994af9810", handicap: 18, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 100, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 154, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 9, frameScore: 163, isSplit: true },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 183, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 215, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 116, isSplit: true },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 195, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 215, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-01-29", laneNum: 24, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 201, bowlerId: "5e2115029c91622994af9812", handicap: 49, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 79, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 115, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 6, frameScore: 124, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 7, frameScore: 133, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 162, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 214, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "8", frameNum: 10, frameScore: 214, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 155, bowlerId: "5e2115029c91622994af9810", handicap: 18, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 54, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 5, frameScore: 61, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 90, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 110, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 9, frameScore: 136, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 155, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 166, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 26, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 65, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 107, isSplit: true },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 116, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 136, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 166, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-02-05", laneNum: 26, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 168, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 36, isSplit: true },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 3, frameScore: 44, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 64, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 104, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 7, frameScore: 122, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 8, frameScore: 130, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 149, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 168, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 235, bowlerId: "5e2115029c91622994af9812", handicap: 48, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 4, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 226, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 235, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 213, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 3, frameScore: 37, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 97, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 127, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 153, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 173, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 213, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 199, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 66, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 4, frameScore: 74, isSplit: true },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 5, frameScore: 92, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 101, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 131, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 159, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 179, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 199, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-02-05", laneNum: 25, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 231, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 98, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 177, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 192, isSplit: false },
                    { shot1: "5", shot2: "4", shot3: "", frameNum: 9, frameScore: 201, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 231, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 155, bowlerId: "5e2115029c91622994af9812", handicap: 48, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 2, frameScore: 28, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 67, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 83, isSplit: false },
                    { shot1: "6", shot2: "0", shot3: "", frameNum: 6, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 117, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 135, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "x", frameNum: 10, frameScore: 155, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 226, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 29, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 69, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 99, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 166, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 206, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 226, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 186, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 5, frameScore: 84, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 6, frameScore: 100, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 7, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 128, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 158, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "8", frameNum: 10, frameScore: 186, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-02-05", laneNum: 26, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 190, bowlerId: "5e2115029c91622994af9813", handicap: 38, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 3, frameScore: 46, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 76, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 105, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 125, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 144, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 182, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 10, frameScore: 190, isSplit: true },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 224, bowlerId: "5e2115029c91622994af9812", handicap: 48, frames: [
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 49, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 68, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 166, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 186, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 224, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 258, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 110, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 139, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 159, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 179, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 209, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 238, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 258, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 190, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 99, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 6, frameScore: 108, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 134, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 152, isSplit: false },
                    { shot1: "6", shot2: "2", shot3: "", frameNum: 9, frameScore: 160, isSplit: true },
                    { shot1: "x", shot2: "x", shot3: "x", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-02-12", laneNum: 30, gameNum: 1, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 190, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 4, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 98, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 106, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 125, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 134, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 164, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "6", frameNum: 10, frameScore: 190, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 201, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 3, frameScore: 58, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 77, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 5, frameScore: 86, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 115, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 135, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 155, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 183, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "0", frameNum: 10, frameScore: 201, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 144, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "7", shot2: "2", shot3: "", frameNum: 2, frameScore: 18, isSplit: true },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 3, frameScore: 27, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 45, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 5, frameScore: 53, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 79, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 98, isSplit: false },
                    { shot1: "6", shot2: "3", shot3: "", frameNum: 8, frameScore: 107, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 127, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "7", frameNum: 10, frameScore: 144, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 247, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 128, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 6, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 178, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 207, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 227, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 247, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-02-12", laneNum: 29, gameNum: 2, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 188, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 28, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 4, frameScore: 68, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 128, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 168, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "x", frameNum: 10, frameScore: 188, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 164, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 19, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 2, frameScore: 37, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 3, frameScore: 45, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 73, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 91, isSplit: false },
                    { shot1: "8", shot2: "0", shot3: "", frameNum: 6, frameScore: 99, isSplit: false },
                    { shot1: "6", shot2: "1", shot3: "", frameNum: 7, frameScore: 106, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 126, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 9, frameScore: 146, isSplit: false },
                    { shot1: "x", shot2: "3", shot3: "5", frameNum: 10, frameScore: 164, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 225, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 2, frameScore: 39, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 59, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 138, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 156, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 8, frameScore: 176, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 205, isSplit: false },
                    { shot1: "x", shot2: "9", shot3: "/", frameNum: 10, frameScore: 225, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 205, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 40, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 3, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 79, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 5, frameScore: 88, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 6, frameScore: 118, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 148, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 196, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 10, frameScore: 205, isSplit: false },
                ]
            },
        ]
    },
    {
        onDate: "2020-02-12", laneNum: 30, gameNum: 3, season: 2, bowlerStats: [
            {
                bowlOff: false, position: 1, scratchScore: 204, bowlerId: "5e2115029c91622994af9810", handicap: 19, frames: [
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 1, frameScore: 8, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 38, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 67, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 87, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 5, frameScore: 106, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 6, frameScore: 122, isSplit: false },
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 7, frameScore: 141, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 161, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 186, isSplit: false },
                    { shot1: "x", shot2: "5", shot3: "3", frameNum: 10, frameScore: 204, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 2, scratchScore: 216, bowlerId: "5e2115029c91622994af9813", handicap: 37, frames: [
                    { shot1: "x", shot2: "", shot3: "", frameNum: 1, frameScore: 30, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 60, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 89, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 5, frameScore: 117, isSplit: false },
                    { shot1: "7", shot2: "/", shot3: "", frameNum: 6, frameScore: 137, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 7, frameScore: 157, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 8, frameScore: 177, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 197, isSplit: false },
                    { shot1: "9", shot2: "/", shot3: "9", frameNum: 10, frameScore: 216, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 3, scratchScore: 177, bowlerId: "5e2115029c91622994af9812", handicap: 46, frames: [
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 1, frameScore: 9, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 2, frameScore: 18, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 48, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 75, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 93, isSplit: false },
                    { shot1: "7", shot2: "1", shot3: "", frameNum: 6, frameScore: 101, isSplit: true },
                    { shot1: "9", shot2: "/", shot3: "", frameNum: 7, frameScore: 120, isSplit: false },
                    { shot1: "9", shot2: "0", shot3: "", frameNum: 8, frameScore: 129, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 157, isSplit: false },
                    { shot1: "x", shot2: "8", shot3: "/", frameNum: 10, frameScore: 177, isSplit: false },
                ]
            },
            {
                bowlOff: false, position: 4, scratchScore: 222, bowlerId: "5e2115029c91622994af9811", handicap: 0, frames: [
                    { shot1: "6", shot2: "/", shot3: "", frameNum: 1, frameScore: 20, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 2, frameScore: 50, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 3, frameScore: 80, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 4, frameScore: 108, isSplit: false },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 5, frameScore: 127, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 6, frameScore: 136, isSplit: false },
                    { shot1: "8", shot2: "/", shot3: "", frameNum: 7, frameScore: 154, isSplit: false },
                    { shot1: "8", shot2: "1", shot3: "", frameNum: 8, frameScore: 163, isSplit: true },
                    { shot1: "x", shot2: "", shot3: "", frameNum: 9, frameScore: 193, isSplit: false },
                    { shot1: "x", shot2: "x", shot3: "9", frameNum: 10, frameScore: 222, isSplit: false },
                ]
            },
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