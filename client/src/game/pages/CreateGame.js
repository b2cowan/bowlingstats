import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

import CreatePlayerGame from '../components/CreatePlayerGame';

const CreateGame = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    

    const onSubmit = (game, e) => {
        e.preventDefault();
        axios.post(`/api/games`, game)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .then(reset());
    };

    return (
        <form className='game-form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Date</label>
                <input
                    type="date"
                    name="onDate"
                    ref={register({
                        required: 'A valid date is required'
                    })}
                />
                <ErrorMessage errors={errors} name="onDate" as="p" />
            </div>
            <div>
                <label>Game Number</label>
                <input
                    type="text"
                    name="gameNum"
                    ref={register({
                        required: 'Game number is required'
                    })}
                />
            </div>
            <div>
                <label>Starting Lane</label>
                <input
                    type="text"
                    name="laneNum"
                    ref={register}
                />
            </div>
            <CreatePlayerGame />    
            <input type="submit" />
        </form>
    )
};

export default CreateGame;