import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { HomePage } from '../components/HomePage';
import { UserDetail } from '../components/UserDetailPage';

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
