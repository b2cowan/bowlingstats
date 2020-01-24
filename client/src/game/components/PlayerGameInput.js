import React from 'react';
// import { useForm, ErrorMessage } from 'react-hook-form';
import Frame from './Frame';

import './PlayerGameInput.css';

const CreatePlayerGame = props => {
    return (
        <div className="player-game">
            <div className="player-name">
                <h4>{props.firstName} {props.lastName}</h4>
            </div>
            <Frame frameNum={1} />
            <Frame frameNum={2} />
            <Frame frameNum={3} />
            <Frame frameNum={4} />
            <Frame frameNum={5} />
            <Frame frameNum={6} />
            <Frame frameNum={7} />
            <Frame frameNum={8} />
            <Frame frameNum={9} />
            <Frame frameNum={10} />
        </div>
    )
}

export default CreatePlayerGame;
