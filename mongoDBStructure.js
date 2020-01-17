
bowlers:
_id: ObjectId,
firstName: String,
lastName: String,
CTFId: String


games: {
	_id: ObjectId,
	onDate: Date,
	gameNum: int,
	season: String,
	opponent: String,
	startingLane: int,
	bowlerStats: [{
		playerId: {_id from players in league/season/teams/bowlers OR from tournament/bowlers},
		handicap: Number,
		scratchScore: Number,
		position: int,
		frames: [{
			frameNum: int,
			shot1: {
				result: String, 
				pinsLeft: [int]
				},
			shot2: {
				result: String, 
				pinsLeft: [int]
				},
			shot3: {
				result: String, 
				pinsLeft: [int]
				}
			frameScore: int
			}
			}
		}]
	}