import React, { Fragment } from "react";
import {
    Routes,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import { DashboardHeader } from "../components";

import { NotFound, Login, Home, Subject } from "../views";

export const appRoutes = () => {
    return (
        <Routes>
            <Route exact path="/auth">
                <Route exact path="sign-in" element={<Login />} />
                <Route exact path="sign-up" element={<Login />} />
                <Route exact path="reset-password" element={<Login />} />
            </Route>
        </Routes>
    )
}

export const dashboardRoutes = () => {
    return (
        <Router basename="/dashboard">
        <DashboardHeader/>
        <Routes>
            <Route>
                <Route exact path="" element={<Home/>}/>
                <Route exact path="subject" element={<Subject/>}/>
            </Route>
        </Routes>
        </Router>
    )
}
