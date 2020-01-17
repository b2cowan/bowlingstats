import React, { useEffect, useState } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';

const BowlerStats = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedBowlers, setLoadedBowlers] = useState();

    useEffect(() => {
        const fetchBowlers = async () => {
            try {
                const responseData = await sendRequest(`/api/bowlers`);

                setLoadedBowlers(responseData.bowlers);
                console.log(responseData.bowlers);
            } catch (err) {
                console.log(err)
            }
        };
        fetchBowlers();
    }, [sendRequest]);

    return (
        <React.Fragment>
            <h1>Bowler Stats</h1>
            <ul>
                {!isLoading && loadedBowlers && loadedBowlers.map(bowler => {
                return (
                <li key={bowler.id}>
                    {bowler.firstName} {bowler.lastName}
                    </li>
                )
                })}
            </ul>
        </React.Fragment>
    )
};

export default BowlerStats;