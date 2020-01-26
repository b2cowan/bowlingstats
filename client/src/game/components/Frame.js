import React from 'react';
import { useFormContext } from 'react-hook-form';

import './Frame.css';

const Frame = props => {
    const { register } = useFormContext();

    return (
        <div className="frame">
            <h5 className="frame-title">{props.frameNum}</h5>
            <div className="frame-shots">
                <input
                    name={`${props.fieldName}.shot1`}
                    type="text"
                    ref={register}
                    onBlur={props.handleInputChange}
                />
                <input
                    name={`${props.fieldName}.shot2`}
                    type="text"
                    ref={register}
                    onBlur={props.handleInputChange}
                />
                {props.frameNum === 10 &&
                    <input
                        name={`${props.fieldName}.shot3`}
                        type="text"
                        ref={register}
                        onBlur={props.handleInputChange}
                    />
                }
            </div>
            <div className="frame-score">
                <input
                    name={`${props.fieldName}.frameScore`}
                    type="text"
                    value={props.frameScore}
                    disabled
                    ref={register}
                />
            </div>
            <input
                name={`${props.fieldName}.frameNum`}
                type="text"
                defaultValue={props.frameNum}
                ref={register}
                style={{ display: "none" }}
            />
            {/* <ErrorMessage errors={errors} name="shot-1" as="p" /> */}
        </div>
    )
}

export default Frame;