import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
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
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedBowlers &&
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