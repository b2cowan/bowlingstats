import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Frame from './Frame';

import { frameScore } from '../../shared/helpers/frameScores-helper';
import './PlayerGameInput.css';

const PlayerGameInput = props => {
    const { register } = useFormContext();
    const [frameShots, setFrameShots] = useState({
        frameScore1: '',
        frameScore2: '',
        frameScore3: '',
        frameScore4: '',
        frameScore5: '',
        frameScore6: '',
        frameScore7: '',
        frameScore8: '',
        frameScore9: '',
        frameScore10: ''
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        let breakDown = name.replace(/[[\]']+/g, '').split(".");
        let shotNum = breakDown[2].replace(/[^\d.]/g, '');
        let frameNum = parseInt(breakDown[1].replace(/[^\d.]/g, ''));
        let realFrameNum = frameNum + 1;
        let shot = 'frame' + realFrameNum + 'shot' + shotNum;

        setFrameShots({ ...frameShots, [shot]: value });
    };

    //set 1st frame score
    useEffect(() => {
        const score = frameScore(1,0,frameShots.frame1shot1,frameShots.frame1shot2,frameShots.frame1shot3,frameShots.frame2shot1,frameShots.frame2shot2,frameShots.frame3shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore1: score }
            })
        };
    }, [frameShots.frame1shot1,frameShots.frame1shot2,frameShots.frame1shot3,frameShots.frame2shot1,frameShots.frame2shot2,frameShots.frame3shot1]);

    //set 2nd frame score
    useEffect(() => {
        const score = frameScore(2,frameShots.frameScore1,frameShots.frame2shot1,frameShots.frame2shot2,frameShots.frame2shot3,frameShots.frame3shot1,frameShots.frame3shot2,frameShots.frame4shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore2: score }
            })
        };
    }, [frameShots.frameScore1,frameShots.frame2shot1,frameShots.frame2shot2,frameShots.frame2shot3,frameShots.frame3shot1,frameShots.frame3shot2,frameShots.frame4shot1]);

    //set 3rd frame score
    useEffect(() => {
        const score = frameScore(3,frameShots.frameScore2,frameShots.frame3shot1,frameShots.frame3shot2,frameShots.frame3shot3,frameShots.frame4shot1,frameShots.frame4shot2,frameShots.frame5shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore3: score }
            })
        };
    }, [frameShots.frameScore2,frameShots.frame3shot1,frameShots.frame3shot2,frameShots.frame3shot3,frameShots.frame4shot1,frameShots.frame4shot2,frameShots.frame5shot1]);

    //set 4th frame score
    useEffect(() => {
        const score = frameScore(4,frameShots.frameScore3,frameShots.frame4shot1,frameShots.frame4shot2,frameShots.frame4shot3,frameShots.frame5shot1,frameShots.frame5shot2,frameShots.frame6shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore4: score }
            })
        };
    }, [frameShots.frameScore3,frameShots.frame4shot1,frameShots.frame4shot2,frameShots.frame4shot3,frameShots.frame5shot1,frameShots.frame5shot2,frameShots.frame6shot1]);

    //set 5th frame score
    useEffect(() => {
        const score = frameScore(5,frameShots.frameScore4,frameShots.frame5shot1,frameShots.frame5shot2,frameShots.frame5shot3,frameShots.frame6shot1,frameShots.frame6shot2,frameShots.frame7shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore5: score }
            })
        };
    }, [frameShots.frameScore4,frameShots.frame5shot1,frameShots.frame5shot2,frameShots.frame5shot3,frameShots.frame6shot1,frameShots.frame6shot2,frameShots.frame7shot1]);

    //set 6th frame score
    useEffect(() => {
        const score = frameScore(6,frameShots.frameScore5,frameShots.frame6shot1,frameShots.frame6shot2,frameShots.frame6shot3,frameShots.frame7shot1,frameShots.frame7shot2,frameShots.frame8shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore6: score }
            })
        };
    }, [frameShots.frameScore5,frameShots.frame6shot1,frameShots.frame6shot2,frameShots.frame6shot3,frameShots.frame7shot1,frameShots.frame7shot2,frameShots.frame8shot1]);

    //set 7th frame score
    useEffect(() => {
        const score = frameScore(7,frameShots.frameScore6,frameShots.frame7shot1,frameShots.frame7shot2,frameShots.frame7shot3,frameShots.frame8shot1,frameShots.frame8shot2,frameShots.frame9shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore7: score }
            })
        };
    }, [frameShots.frameScore6,frameShots.frame7shot1,frameShots.frame7shot2,frameShots.frame7shot3,frameShots.frame8shot1,frameShots.frame8shot2,frameShots.frame9shot1]);

    //set 8th frame score
    useEffect(() => {
        const score = frameScore(8,frameShots.frameScore7,frameShots.frame8shot1,frameShots.frame8shot2,frameShots.frame8shot3,frameShots.frame9shot1,frameShots.frame9shot2,frameShots.frame10shot1);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore8: score }
            })
        };
    }, [frameShots.frameScore7,frameShots.frame8shot1,frameShots.frame8shot2,frameShots.frame8shot3,frameShots.frame9shot1,frameShots.frame9shot2,frameShots.frame10shot1]);

    //set 9th frame score
    useEffect(() => {
        const score = frameScore(9,frameShots.frameScore8,frameShots.frame9shot1,frameShots.frame9shot2,frameShots.frame9shot3,frameShots.frame10shot1,frameShots.frame10shot2);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore9: score }
            })
        };
    }, [frameShots.frameScore8,frameShots.frame9shot1,frameShots.frame9shot2,frameShots.frame9shot3,frameShots.frame10shot1,frameShots.frame10shot2]);

    //set 10th frame score
    useEffect(() => {
        const score = frameScore(10,frameShots.frameScore9,frameShots.frame10shot1,frameShots.frame10shot2,frameShots.frame10shot3);

        if (score) {
            setFrameShots(prevState => {
                return { ...prevState, frameScore10: score }
            })
        };
    }, [frameShots.frameScore9,frameShots.frame10shot1,frameShots.frame10shot2,frameShots.frame10shot3]);

    return (
        <div className="player-game">
            <div className="player-name">
                <h4>{props.firstName} {props.lastName}</h4>
                <input
                    type="text"
                    name={`${props.fieldName}.bowlerId`}
                    ref={register}
                    style={{ display: "none" }}
                    defaultValue={props.bowlerId}
                />
            </div>
            <Frame
                frameNum={1}
                fieldName={`${props.fieldName}.frames[0]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore1}
            />
            <Frame
                frameNum={2}
                fieldName={`${props.fieldName}.frames[1]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore2}
            />
            <Frame
                frameNum={3}
                fieldName={`${props.fieldName}.frames[2]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore3}
            />
            <Frame
                frameNum={4}
                fieldName={`${props.fieldName}.frames[3]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore4}
            />
            <Frame
                frameNum={5}
                fieldName={`${props.fieldName}.frames[4]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore5}
            />
            <Frame
                frameNum={6}
                fieldName={`${props.fieldName}.frames[5]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore6}
            />
            <Frame
                frameNum={7}
                fieldName={`${props.fieldName}.frames[6]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore7}
            />
            <Frame
                frameNum={8}
                fieldName={`${props.fieldName}.frames[7]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore8}
            />
            <Frame
                frameNum={9}
                fieldName={`${props.fieldName}.frames[8]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore9}
            />
            <Frame
                frameNum={10}
                fieldName={`${props.fieldName}.frames[9]`}
                handleInputChange={handleInputChange}
                frameScore={frameShots.frameScore10}
            />
        </div>
    )
}

export default PlayerGameInput;
