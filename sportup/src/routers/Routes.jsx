import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Equipo } from '../components/Equipo'
// import { Modal } from '../components/Modal'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route component = { Inicio } />
                <Route exact path='/' component = { Inicio } />
                <Route exact path='/Equipo' component = { Equipo } />
                {/* <Route exact path='/Modal' component = { Modal } /> */}

            </Switch>
        </BrowserRouter>
    )
}
