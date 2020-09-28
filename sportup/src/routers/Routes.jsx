import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path='/' component = { Inicio } />
                <Route exact path='/Inicio' component = { Inicio } />
            </Switch>
        </BrowserRouter>
    )
}
