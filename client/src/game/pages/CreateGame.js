import React, { useEffect, useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { sortableContainer, sortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";

// import { useHistory } from 'react-router-dom';

import GameDetailsInput from '../components/GameDetailsInput';
import PlayerGameInput from '../components/PlayerGameInput';
import './CreateGame.css';

const SortableElement = sortableElement(({ children, idx }) => {
    return (
        <div>
            {children}
        </div>
    )
});

const SortableContainer = sortableContainer(({ bowlers }) => {
    return (
        <div>
            {bowlers.map((bowler, idx) => {
                const DragHandle = sortableHandle(() => {
                    return (
                        <div className="drag-handle">
                            <h1>{idx + 1}</h1>
                        </div>
                    )
                });
                const fieldName = `bowlerStats[${idx}]`;
                return (
                    <SortableElement index={idx} key={`${bowler.id}-${idx}`}>
                        <div className="bowler-list-item">
                            <DragHandle />
                            <fieldset name={fieldName} key={fieldName}>
                                <PlayerGameInput
                                    idx={idx+1}
                                    fieldName={fieldName}
                                    key={bowler.id}
                                    bowlerId={bowler.id}
                                    firstName={bowler.firstName}
                                    lastName={bowler.lastName}
                                />
                            </fieldset>
                        </div>
                    </SortableElement>
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
        const newBowlers = arrayMove(loadedBowlers, oldIndex, newIndex)
        setLoadedBowlers(newBowlers)
    };

    return (
        <FormContext {...methods}>
            {loadedBowlers &&
                <div className="form-container">
                    {console.log(loadedBowlers)}
                    <form className='game-form' onSubmit={methods.handleSubmit(onSubmit)}>
                        <GameDetailsInput />
                        <SortableContainer bowlers={loadedBowlers} onSortEnd={onSortEnd} />
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