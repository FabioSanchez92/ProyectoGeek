import React from 'react'
import { Link } from 'react-router-dom';

export const NavPrincipal = ({navItem , Menu, NavLink}) => {
    const items = [...Menu];
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <h2 className="mb-5">SportUp</h2>
            <div class="group d-flex align-items-center">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-5">
                    {
                        items.map( (ItemsMenu, y)  =>{
                            return  <li>
                                        <Link className= {NavLink} >{ItemsMenu}</Link>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
