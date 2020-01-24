import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BowlerStats = () => {
    const [loadedBowlers, setLoadedBowlers] = useState();

    useEffect(() => {
        axios(`/api/bowlers`)
        .then(res => {
            setLoadedBowlers(res.data.bowlers);
        })
        .catch(err => 
            console.log(err))
    }, []);

    return (
        <React.Fragment>
            {loadedBowlers &&
                <div>
                    <h1>Bowlers</h1>
                    <ul>
                        {loadedBowlers.map(bowler => {
                            return (
                                <Link to={`/${bowler.id}`} key={bowler.id}>
                                    <div>
                                        {bowler.firstName} {bowler.lastName}
                                    </div>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            }
        </React.Fragment>
    )
};

export default BowlerStats;