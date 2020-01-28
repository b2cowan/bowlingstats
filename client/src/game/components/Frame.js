import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@material-ui/core/Button';

import './Frame.css';

const Frame = props => {
    const { register, setValue, watch } = useFormContext();
    const [isSplit, setIsSplit] = useState(false);
    const [disableSecondShot, setDisableSecondShot] = useState();
    const [disableThirdShot, setDisableThirdShot] = useState();

    const handleSplit = () => {
        setIsSplit(!isSplit);
    };

    useEffect(() => {
        if (props.isAbsent) {
            setValue(`${props.fieldName}.shot1`, '');
            setValue(`${props.fieldName}.shot2`, '');
            setValue(`${props.fieldName}.shot3`, '');
        }
    });

    const onBlurChecks = e => {
        props.handleInputChange(e);
        const isStrike = watch(`${props.fieldName}.shot1`, "value");
        if (props.frameNum !== 10) {
            if (isStrike.toLowerCase() === "x") {
                setValue(`${props.fieldName}.shot2`, '');
                setDisableSecondShot(true);
            }
            if (isStrike.toLowerCase() !== "x") {
                setDisableSecondShot(false);
            }
        }
        if (props.frameNum === 10) {
            if (isStrike.toLowerCase() !== "x") {
                setValue(`${props.fieldName}.shot3`, '');
                setDisableThirdShot(true);
            }
            if (isStrike.toLowerCase() === "x") {
                setDisableThirdShot(false);
            }
        }
    }

    return (
        <div className={`frame ${props.frameNum === 10 ? "frame-ten" : "frames-less-10"} `}>
            <h5 className="frame-title">{props.frameNum}</h5>
            <div className="frame-sans-title">
                <div className="frame-shots">
                    <input
                        name={`${props.fieldName}.shot1`}
                        type="text"
                        ref={register}
                        onBlur={onBlurChecks}
                        disabled={props.isAbsent}
                    />
                    <input
                        name={`${props.fieldName}.shot2`}
                        type="text"
                        ref={register}
                        onBlur={props.handleInputChange}
                        disabled={props.isAbsent || disableSecondShot}
                    />
                    {props.frameNum === 10 &&
                        <input
                            name={`${props.fieldName}.shot3`}
                            type="text"
                            ref={register}
                            onBlur={props.handleInputChange}
                            disabled={props.isAbsent || disableThirdShot}
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
                    type="button"
                    value={props.frameNum}
                    ref={register}
                    style={{ display: "none" }}
                />
                <input
                    type="button"
                    name={`${props.fieldName}.isSplit`}
                    value={isSplit}
                    ref={register}
                    style={{ display: "none" }}
                />
                {/* <ErrorMessage errors={errors} name="shot-1" as="p" /> */}
            </div>
            <div className="frame-split-btn">
                <Button
                    variant={isSplit ? "contained" : "outlined"}
                    color="secondary"
                    onClick={handleSplit}
                    disabled={props.isAbsent}
                >
                    Split
                </Button>
            </div>
        </div>
    )
}

export default Frame;