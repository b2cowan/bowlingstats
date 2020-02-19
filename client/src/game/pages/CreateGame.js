import React, { useEffect, useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import arrayMove from "array-move";

// import { useHistory } from 'react-router-dom';

import GameDetailsInput from '../components/GameDetailsInput';
import PlayerGameInput from '../components/PlayerGameInput';
import './CreateGame.css';

const CreateGame = () => {
    const methods = useForm();
    const [loadedBowlers, setLoadedBowlers] = useState();
    const [isClearing, setIsClearing] = useState(false);
    const defaultValues = {
        onDate: "",
        gameNum: "",
        laneNum: ""
    };

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
            .then(methods.reset(defaultValues));
        console.log(game);
    };

    const dropDownSort = (oldIdx, newIdx) => {
        const newBowlers = arrayMove(loadedBowlers, oldIdx, newIdx);
        setLoadedBowlers(newBowlers);
    }

    const DropDown = props => {
        return (
            <Select
                // id="demo-simple-select-outlined"
                value={props.idx}
                onChange={e => dropDownSort(props.idx, e.target.value)}
            > {
                    props.bowlers.map((bowler, idx) => {
                        return (
                            <MenuItem value={idx} key={idx}>
                                {idx + 1}
                            </MenuItem>
                        )
                    })}
            </Select>
        )
    };

    const clearForm = () => {
        methods.reset(defaultValues);
        setIsClearing(true);
        setTimeout(() => {
            setIsClearing(false);
        }, 1000);
    };

    return (
        <FormContext {...methods}>
            {loadedBowlers &&
                <div className="form-container">
                    <form className='game-form' onSubmit={methods.handleSubmit(onSubmit)}>
                        <GameDetailsInput />
                        <div>
                            {loadedBowlers.map((bowler, idx) => {
                                const fieldName = `bowlerStats[${idx}]`;
                                return (
                                    <fieldset name={fieldName} key={bowler.id}>
                                        <div className="bowler-list-item">
                                            <div className="sort-drop-down">
                                                <DropDown bowlers={loadedBowlers} idx={idx} />
                                            </div>

                                            <PlayerGameInput
                                                idx={idx + 1}
                                                fieldName={fieldName}
                                                bowlerId={bowler.id}
                                                firstName={bowler.firstName}
                                                lastName={bowler.lastName}
                                                isClearing={isClearing}
                                            />

                                        </div>
                                    </fieldset>
                                );
                            })}
                        </div >

                        <div className="create-game-btns">
                            <Button
                                type="submit"
                                color="primary"
                                variant="outlined"
                                startIcon={<SaveIcon />}
                            >
                                Save Game
                            </Button>
                            <Button
                                color="secondary"
                                variant="outlined"
                                onClick={clearForm}
                            >
                                Clear Form
                            </Button>
                        </div>
                    </form>
                </div>
            }
        </FormContext>
    )
};

export default CreateGame;