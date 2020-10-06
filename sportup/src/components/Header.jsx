import React from 'react'
import { NavLogin } from './NavLogin'
import { NavPrincipal } from './NavPrincipal'

export const Header = () => {

    return (
        <header className=" d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm  ">
            <div className="container ch">
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
