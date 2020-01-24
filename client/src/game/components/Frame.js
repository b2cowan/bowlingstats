import React from 'react';
import { useFormContext, ErrorMessage } from 'react-hook-form';

import './Frame.css';

const Frame = props => {
    const { register, errors } = useFormContext();
    return (
        <div className="frame">
            <h5 className="frame-title">{props.frameNum}</h5>
            <div className="frame-shots">
                <input
                    name="shot-1"
                    type="text"
                    ref={register({ required: '1st shot required.' })}
                />
                <input
                    name="shot-2"
                    type="text"
                    ref={register()}
                />
                {props.frameNum === 10 &&
                    <input
                        name="shot-3"
                        type="text"
                        ref={register()}
                    />
                }
            </div>
            <div className="frame-score">
                <input
                    name="frameScore"
                    type="text"
                    value={props.frameScore}
                    disabled
                    ref={register()} />
            </div>
            <ErrorMessage errors={errors} name="shot-1" as="p" />
        </div>
    )
}

export default Frame;