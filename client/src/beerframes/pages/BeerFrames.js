import React from 'react';

// import AnchorOdds from '../components/AnchorOdds';
import WeeklyBeerFrames from '../components/WeeklyBeerFrames';
import './BeerFrames.css';

const BeerFrames = () => {
    return (
        <div className="beer-frame-container">
            <WeeklyBeerFrames />
        </div>
    )
}

export default BeerFrames;