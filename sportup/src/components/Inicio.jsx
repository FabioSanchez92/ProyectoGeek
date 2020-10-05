import React from 'react'
import { Equipo } from './Equipo'
import { Header } from './Header'
import { Hero } from './Hero'

export const Inicio = () => {
    return (
        <>
            <Header/>
            <Hero
                hero = "hero"

            />
            <Equipo/>
        </>


    )
}
