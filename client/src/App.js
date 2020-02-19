import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import BowlerStats from './bowler/pages/BowlerStats';
import TeamStats from './team/pages/TeamStats';
import BeerFrames from './beerframes/pages/BeerFrames';
import CreateGame from './game/pages/CreateGame';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import ShowGame from './game/pages/ShowGame';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route exact path="/">
                        <h1>hi Pat</h1>
                    </Route>
                    <Route exact path="/teams">
                        <TeamStats />
                    </Route>
                    <Route exact path="/bowlers">
                        <BowlerStats />
                    </Route>
                    <Route exact path="/beerframes">
                        <BeerFrames />
                    </Route>
                    <Route exact path="/games/new">
                        <CreateGame />
                    </Route>
                    <Route exact path="/games/:gameId">
                        <ShowGame />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    )
}

export default App;
