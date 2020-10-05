import React from 'react'
import { Link } from 'react-router-dom'

export const NavLogin = ({MenuRedes}) => {
    const items = [...MenuRedes];
    return (
        <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
            <div className="contact">
            <Link to ="/"> <i className="fa fa-envelope mr-2" aria-hidden="true"></i>SportUp@sportup.com</Link>
            </div>
            <nav className="d-flex aic">
                <Link to="/" className="login"><i className="fa fa-user mr-2" aria-hidden="true"></i>Iniciar sesión</Link>
                <Link to="/" className="login">Login</Link>
                <ul className="nav social d-none d-md-flex">
                    {
                        items.map((itemRedes, y)=>{
                            return  <li>
                                <Link key={y} to=""> <i className={itemRedes}></i></Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
