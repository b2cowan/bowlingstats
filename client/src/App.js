import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './home/pages/Home';
import BowlerStats from './bowler/pages/BowlerStats';
import TeamStats from './team/pages/TeamStats';
import BeerFrames from './beerframes/pages/BeerFrames';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
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
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    )
}

export default App;
