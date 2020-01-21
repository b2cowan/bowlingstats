import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import Frame from './Frame';

import './CreatePlayerGame.css';

const CreatePlayerGame = props => {
    return (
        <div className="player-game">
            <Frame frameNum={1} frameScore={32}/>
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
