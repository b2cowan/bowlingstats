import React, { useEffect, useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";

// import { useHistory } from 'react-router-dom';

import GameDetailsInput from '../components/GameDetailsInput';
import PlayerGameInput from '../components/PlayerGameInput';
import './CreateGame.css';

const SortableItem = SortableElement(({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
});


const SortableList = SortableContainer(({ bowlers, dropDownSort }) => {
    const dropDown = bowlers.map((bowler, idx) => {
        return (
            <MenuItem value={idx} key={idx}>
                {idx + 1}
            </MenuItem>
        )
    });

    return (
        <div>
            {bowlers.map((bowler, idx) => {
                const DragHandle = SortableHandle(() => {
                    return (
                        <div className="drag-handle">
                            <h1>{idx + 1}</h1>
                        </div>
                    )
                });
                const fieldName = `bowlerStats[${idx}]`;
                return (
                    <SortableItem index={idx} key={`${bowler.id}-${idx}`}>
                        <div className="bowler-list-item">
                            <DragHandle className="drag-handle" />
                            <div className="sort-drop-down">
                                <Select
                                    // id="demo-simple-select-outlined"
                                    value={idx}
                                    onChange={e => dropDownSort(idx, e.target.value)}
                                >
                                    {dropDown}
                                </Select>
                            </div>
                            <fieldset name={fieldName} key={fieldName}>
                                <PlayerGameInput
                                    idx={idx + 1}
                                    fieldName={fieldName}
                                    key={bowler.id}
                                    bowlerId={bowler.id}
                                    firstName={bowler.firstName}
                                    lastName={bowler.lastName}
                                />
                            </fieldset>
                        </div>
                    </SortableItem>
                );
            })}
        </div >
    );
});

const CreateGame = () => {
    const methods = useForm();
    const [loadedBowlers, setLoadedBowlers] = useState();
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
        // axios.post(`/api/games`, game)
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        //     .then(methods.reset());
        console.log(game);
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        document.body.style.cursor = "default";
        const newBowlers = arrayMove(loadedBowlers, oldIndex, newIndex);
        setLoadedBowlers(newBowlers);
    };

    const dropDownSort = (oldIdx, newIdx) => {
        const newBowlers = arrayMove(loadedBowlers, oldIdx, newIdx);
        setLoadedBowlers(newBowlers);
    }


    return (
        <FormContext {...methods}>
            {loadedBowlers &&
                <div className="form-container">
                    <form className='game-form' onSubmit={methods.handleSubmit(onSubmit)}>
                        <GameDetailsInput />
                        <SortableList bowlers={loadedBowlers} onSortEnd={onSortEnd} dropDownSort={dropDownSort} />
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
                                onClick={() => { methods.reset(defaultValues); }}
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