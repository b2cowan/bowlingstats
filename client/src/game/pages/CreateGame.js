import React, { useEffect, useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

import GameDetailsInput from '../components/GameDetailsInput';
import PlayerGameInput from '../components/PlayerGameInput';
import './CreateGame.css';

const CreateGame = () => {
    const methods = useForm();
    const [loadedBowlers, setLoadedBowlers] = useState();

    useEffect(() => {
        axios(`/api/bowlers`)
        .then(res => {
            setLoadedBowlers(res.data.bowlers);
        })
        .catch(err => 
            console.log(err))
    }, []);

    const onSubmit = (game, e) => {
        e.preventDefault();
        axios.post(`/api/games`, game)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .then(methods.reset());
        console.log(game);
    };

    return (
        <FormContext {...methods}>
            {loadedBowlers &&
                <form className='game-form' onSubmit={methods.handleSubmit(onSubmit)}>
                    <GameDetailsInput />
                    {loadedBowlers && loadedBowlers.map(bowler => {
                        return (
                            <PlayerGameInput
                                key={bowler.id}
                                firstName={bowler.firstName}
                                lastName={bowler.lastName}
                            />
                        )
                    })}
                    <input type="submit" value="Create Game" />
                </form>
            }
        </FormContext>
    )
};

export default CreateGame;