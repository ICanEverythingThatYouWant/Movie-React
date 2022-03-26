import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";


const Rout = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                exact
                path='/'
                component={Home}
            />
        </Switch>
    )
}

export default Rout;