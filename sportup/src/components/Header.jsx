import React from 'react'
import { NavLogin } from './NavLogin'
import { NavPrincipal } from './NavPrincipal'

export const Header = () => {

    const
    return (
        <header className="position-absolute w-100">
            <div className="container">
                <NavLogin
                    MenuRedes = {["fa fa-facebook", "fa fa-twitter", "fa fa-instagram"]}
                />
                <NavPrincipal
                    navItem = 'nav-item'
                    NavLink = 'nav-link space'
                    Menu = {["Inicio", "Sobre Nosotros", "Equipo", "Contacto", "Servicios"]}
            


                />
            </div>
        </header> 
    )
}
