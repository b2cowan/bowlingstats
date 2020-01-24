import React, { Fragment } from 'react';
import { useFormContext, ErrorMessage } from 'react-hook-form';

const GameDetailsInput = props => {
    const { register, errors } = useFormContext();
    return (
        <Fragment>
            <div>
                <label htmlFor="onDate">Date</label>
                <input
                    type="date"
                    name="onDate"
                    ref={register({
                        required: 'A valid date is required.'
                    })}
                />
                <ErrorMessage errors={errors} name="onDate" as="p"  />
            </div>
            <div>
                <label htmlFor="gameNum">Game Number</label>
                <input
                    type="text"
                    name="gameNum"
                    ref={register({
                        required: 'Game number is required.'
                    })}
                />
                <ErrorMessage errors={errors} name="gameNum" as="p" />
            </div>
            <div>
                <label htmlFor="laneNum">Starting Lane</label>
                <input
                    type="text"
                    name="laneNum"
                    ref={register}
                />
            </div>
        </Fragment>
    );
};

export default GameDetailsInput;