import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './WeeklyBeerFrames.css';

const WeeklyBeerFrames = () => {
    const [loadedWeeklyBeerFrames, setLoadedWeeklyBeerFrames] = useState();

    useEffect(() => {
        axios(`/api/beerframes`)
            .then(res => {
                setLoadedWeeklyBeerFrames(res.data.weeklyBeerFrames);
                console.log(res.data);
            })
            .catch(err =>
                console.log(err))
    }, []);

    return (
        <div className="team-stats-container">
            {loadedWeeklyBeerFrames &&
                <div className="team-stats">
                    
                    <table id="summaryStats" className="summary-stats-table">
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Bowler</th>
                                <th>Num Beer Frames</th>
                            </tr>
                            {loadedWeeklyBeerFrames.map(beerFrame => {
                                const beerFrameKey = beerFrame.bowlerId+beerFrame.onDate
                                return (
                                    <tr key={beerFrameKey}>
                                        <td>{beerFrame.onDate.replace('T00:00:00.000Z','')}</td>
                                        <td>{beerFrame.firstName} {beerFrame.lastName}</td>
                                        <td>{beerFrame.numBeerFrames}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>

    )
}

export default WeeklyBeerFrames;