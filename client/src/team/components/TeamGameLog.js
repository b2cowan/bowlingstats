import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import './TeamGameLog.css';

const TeamGameLog = () => {
    const [loadedGames, setLoadedGames] = useState();
    const [seasons, setSeasons] = useState();
    const [currentSeason, setCurrentSeason] = useState();

    useEffect(() => {
        axios(`/api/games/seasons`)
            .then(res => {
                const seasons = res.data.seasons;
                const currentSeason = Math.max(...seasons)
                setSeasons(seasons);
                setCurrentSeason(currentSeason);
                console.log(seasons);
                console.log(currentSeason);
                return axios.get(`/api/games/${currentSeason}`)
            })
            .then(res => {
                setLoadedGames(res.data.games);
                console.log(res.data.games);
            })
            .catch(err =>
                console.log(err))
    }, []);

    return (
        <Fragment>
            {loadedGames && currentSeason &&
                <div className='team-game-log'>
                    <h2>Season: {currentSeason}</h2>
                    {loadedGames.map(game => (
                        <div key={game.id}>
                            <h5>{game.onDate.replace('T00:00:00.000Z', '')} - Game Number: {game.gameNum}</h5>
                            {game.bowlerStats.map(bowlerGame => (
                                <div key={bowlerGame.id}>
                                    <p>{bowlerGame.bowlerId.firstName} - Scratch Score: {bowlerGame.scratchScore} - Handicap: {bowlerGame.handicap} - Position: {bowlerGame.position}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            }
        </Fragment>
    )
}

export default TeamGameLog;