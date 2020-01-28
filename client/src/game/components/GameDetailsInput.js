import React from 'react';
import { useFormContext, ErrorMessage, Controller } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';

import './GameDetailsInput.css';

const GameDetailsInput = props => {
    const { register, errors, control } = useFormContext();

    return (
        <div className='game-details'>
            <div className={`game-details-input game-details-date`}>
                <Controller
                    as={<TextField
                        label="Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true
                        }} />}
                    control={control}
                    name="onDate"
                    rules={{
                        required: 'A valid date is required.'
                    }}
                    defaultValue=""
                />
                <ErrorMessage errors={errors} name="onDate" as="p" />
            </div>
            <div className={`game-details-input game-details-text`}>
                <Controller
                    as={<TextField
                        label="Game Number"
                        inputRef={register}
                        type="number"
                    />}
                    name="gameNum"
                    control={control}
                    rules={{
                        required: 'Game number is required.'
                    }}
                    defaultValue=""
                />
                <ErrorMessage errors={errors} name="gameNum" as="p" />
            </div>
            <div className={`game-details-input game-details-text`}>
                <Controller
                    as={<TextField
                        label="Lane Number"
                        inputRef={register}
                        type="number"
                    />}
                    name="laneNum"
                    control={control}
                    defaultValue=""
                />
            </div>
        </div>
    );
};

export default GameDetailsInput;