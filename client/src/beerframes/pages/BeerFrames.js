import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import AnchorOdds from '../components/AnchorOdds';
import WeeklyBeerFrames from '../components/WeeklyBeerFrames';
import './BeerFrames.css';

const BeerFrames = () => {
    const [activeComp, setActiveComp] = useState("AnchorCalc");

    return (
        <div className="beer-frame-container">
            <div className="beer-frame-buttons">
            <Button
                color="secondary"
                variant={activeComp === "WeeklyBeerFrames" ? "contained" : "outlined"}
                onClick={() => setActiveComp("WeeklyBeerFrames")}
            >
                Weekly Beer Frames
            </Button>
            <Button
                color="secondary"
                variant={activeComp === "AnchorCalc" ? "contained" : "outlined"}
                onClick={() => setActiveComp("AnchorCalc")}
            >
                Anchor Odds Calculator
            </Button>
            </div>
            {activeComp === "WeeklyBeerFrames" &&
                <WeeklyBeerFrames />
            }
            {activeComp === "AnchorCalc" &&
                <AnchorOdds />
            }
        </div>
    )
}

export default BeerFrames;