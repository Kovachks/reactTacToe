import React from 'react';
import Game from './components/Game/Game';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Signup' component={Login} />
            <Route exact path='/Game' component={Game} />
        </Switch>
    );
};

export default Routes;