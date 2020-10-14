import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { HomePage } from './components/ui/HomePage';
import { UserDetail } from './components/ui/UserDetail';

export const MainApp = () => {
    return (
        <Router>
            <div className="container">
                <h1>Navbar</h1>
                <hr />

                <Switch>
                    <Route
                        exact
                        path="/"
                        component={ HomePage }
                    >
                    </Route>

                    <Route 
                        path="/:id"
                        component={ UserDetail }
                    >
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}
