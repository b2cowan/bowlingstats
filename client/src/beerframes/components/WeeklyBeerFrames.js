import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './WeeklyBeerFrames.css';

const WeeklyBeerFrames = () => {
    const [loadedWeeklyBeerFrames, setLoadedWeeklyBeerFrames] = useState();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios(`/api/beerframes`)
            .then(res => {
                setLoadedWeeklyBeerFrames(res.data.weeklyBeerFrames);
            })
            .catch(err =>
                console.log(err))
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div className="weekly-beer-frame-container">
            {loadedWeeklyBeerFrames &&
                <Paper>
                    <TableContainer>
                        <Table stickyHeader size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Bowler</TableCell>
                                    <TableCell align="center">Beer Frames</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? loadedWeeklyBeerFrames.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : loadedWeeklyBeerFrames
                                ).map(beerFrame => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={beerFrame.bowlerId + beerFrame.onDate}>
                                        <TableCell align="center">{beerFrame.onDate.replace('T00:00:00.000Z', '')}</TableCell>
                                        <TableCell align="center">{beerFrame.firstName} {beerFrame.lastName}</TableCell>
                                        <TableCell align="center">{beerFrame.numBeerFrames}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={loadedWeeklyBeerFrames.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            }
        </div>

    )
}

export default WeeklyBeerFrames;