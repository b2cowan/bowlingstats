import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './TeamStats.css';

const TeamStats = () => {
    const [loadedTeamStats, setLoadedTeamStats] = useState();

    useEffect(() => {
        axios(`/api/teamstats`)
            .then(res => {
                setLoadedTeamStats(res.data.summaryStats);
            })
            .catch(err =>
                console.log(err))
    }, []);


    return (
        <div className="team-stats-container">
            <div className="team-summary-stats-container">
                {loadedTeamStats &&
                    <Paper>
                        <TableContainer>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Season</TableCell>
                                        <TableCell align="center">Bowler</TableCell>
                                        <TableCell align="center">Games</TableCell>
                                        <TableCell align="center">Average</TableCell>
                                        <TableCell align="center">High Game</TableCell>
                                        <TableCell align="center">Low Game</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {loadedTeamStats.map(bowler => {
                                        const bowlerKey = bowler._id.bowlerId + bowler._id.season
                                        return (
                                            <TableRow key={bowlerKey}>
                                                <TableCell align="center">{bowler._id.season}</TableCell>
                                                <TableCell align="center">{bowler.firstName} {bowler.lastName}</TableCell>
                                                <TableCell align="center">{bowler.numGames}</TableCell>
                                                <TableCell align="center">{bowler.average.toFixed(2)}</TableCell>
                                                <TableCell align="center">{bowler.highGame.toFixed(0)}</TableCell>
                                                <TableCell align="center">{bowler.lowGame.toFixed(0)}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                }
            </div>
        </div>
    )
}

export default TeamStats;