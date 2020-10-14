import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { HomePage } from '../components/ui/home/HomePage';
import { UserDetail } from '../components/users/UserDetail';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ HomePage }/>
                    <Route path="/:id" component={ UserDetail }/>
                </Switch>
            </div>
        </Router>
    )
}
