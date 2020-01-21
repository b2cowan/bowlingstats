import React from 'react';
import { useForm } from 'react-hook-form';

import './Frame.css';

const Frame = props => {
    const { register } = useForm();
    return (
        <div className="frame">
            <h5 className="frame-title">{props.frameNum}</h5>
            <div className="frame-shots">
                <input name="shot-1" type="text" ref={register({ required: true })} />
                <input name="shot-2" type="text" ref={register()} />
                {props.frameNum === 10 && <input name="shot-3" type="text" ref={register()} />}
            </div>
            <div className="frame-score">
                <input
                    name="shot-2"
                    type="text"
                    value={props.frameScore}
                    disabled
                    ref={register()} />
            </div>
        </div>
    )
}

export default Frame;