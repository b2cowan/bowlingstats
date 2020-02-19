import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowGame = () => {
    const [loadedGame, setLoadedGame] = useState();

    const gameId = useParams().gameId;

    useEffect(() => {
        axios(`/api/games/${gameId}`)
            .then(res => {
                setLoadedGame(res.data.game);
                console.log(res.data.game);
            })
            .catch(err =>
                console.log(err))
    }, [gameId]);

    return (
        <Fragment>
            {loadedGame &&
                <div>
                    <h1>Date: {loadedGame.onDate}</h1>
                    {loadedGame.bowlerStats.map(bowler => {
                        return (
                            <div key={bowler.bowlerId._id}>
                                <h3>{bowler.bowlerId.firstName} {bowler.bowlerId.lastName}</h3>
                                <h3>{bowler.scratchScore}</h3>
                            </div>
                        )
                    })}
                </div>
            }
        </Fragment>
    )
}

export default ShowGame;