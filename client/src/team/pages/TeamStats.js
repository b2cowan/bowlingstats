import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import './TeamStats.css';

const TeamStats = () => {
    const [loadedTeamStats, setLoadedTeamStats] = useState();

    useEffect(() => {
        axios(`/api/teamstats`)
            .then(res => {
                setLoadedTeamStats(res.data.summaryStats);
                console.log(res.data);
            })
            .catch(err =>
                console.log(err))
    }, []);

    return (
        <Fragment>
            {loadedTeamStats &&
                <div className="team-stats">
                    <table id="summaryStats" className="summary-stats-table">
                        <tbody>
                            <tr>
                                <th>Season</th>
                                <th>Bowler</th>
                                <th>Games</th>
                                <th>Average</th>
                                <th>High Game</th>
                                <th>Low Game</th>
                            </tr>
                            {loadedTeamStats.map(bowler => {
                                const bowlerKey = bowler._id.bowlerId + bowler._id.season
                                return (
                                    <tr key={bowlerKey}>
                                        <td>{bowler._id.season}</td>
                                        <td>{bowler.firstName} {bowler.lastName}</td>
                                        <td>{bowler.numGames}</td>
                                        <td>{bowler.average.toFixed(2)}</td>
                                        <td>{bowler.highGame.toFixed(0)}</td>
                                        <td>{bowler.lowGame.toFixed(0)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </Fragment>
    )
}

export default TeamStats;