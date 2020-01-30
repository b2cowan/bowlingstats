import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './AnchorOdds.css';

const AnchorOdds = () => {
    const [bowlerOne, setBowlerOne] = useState();
    const [bowlerTwo, setBowlerTwo] = useState();
    const [bowlerThree, setBowlerThree] = useState();
    const [saveOdds, setSaveOdds] = useState();
    const [beerFrameOdds, setBeerFrameOdds] = useState();

    const calculateOdds = (b1, b2, b3) => {
        const calculatedSaveOdds = b1 * b2 * b3;
        setSaveOdds(calculatedSaveOdds);

        const beerFrameOdds1 = (1 - b1) * b2 * b3;
        const beerFrameOdds2 = b1 * (1 - b2) * b3;
        const beerFrameOdds3 = b1 * b2 * (1 - b3);
        const calculatedBeerFrameOdds = beerFrameOdds1 + beerFrameOdds2 + beerFrameOdds3;
        setBeerFrameOdds(calculatedBeerFrameOdds);
    }

    return (
        <div className="anchor-odds-form">
            <h1>Anchor Odds</h1>
            {saveOdds && <h3>Save opportunity: {saveOdds*100}%</h3>}
            {beerFrameOdds && <h3>Beer frame opportunity: {beerFrameOdds*100}%</h3>}
            <form>
                <div className="inputs">
                    <TextField id="bowler-1" label="Bowler 1 Strike Rate" variant="outlined" type="number" onChange={e => setBowlerOne(e.target.value)} />
                    <TextField id="bowler-2" label="Bowler 1 Strike Rate" variant="outlined" type="number" onChange={e => setBowlerTwo(e.target.value)} />
                    <TextField id="bowler-3" label="Bowler 1 Strike Rate" variant="outlined" type="number" onChange={e => setBowlerThree(e.target.value)} />

                    <Button
                        onClick={() => calculateOdds(bowlerOne, bowlerTwo, bowlerThree)}
                        color="primary"
                        variant="contained"
                    >
                        Calculate Odds
                </Button>
                </div>
            </form>
        </div>
    )
}

export default AnchorOdds;