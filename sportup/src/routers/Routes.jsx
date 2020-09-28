import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Equipo } from '../components/Equipo'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component = { Inicio } />
                <Route path='/Equipo' component = { Equipo } />
            </Switch>
        </BrowserRouter>
    )
}
