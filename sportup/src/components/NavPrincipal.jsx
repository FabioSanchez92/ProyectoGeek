import React from 'react'
import { Link } from 'react-router-dom';

export const NavPrincipal = ({navItem , Menu, NavLink, data}) => {
    const items = [...Menu];
    
    return (
        <nav className="my-2 my-md-0 mr-md-3 float-right navbar-nav">
            <ul>
                {
                    items.map((intems, item)=>{
                        return<>
                                <li className="mynav"><a className="p-2 text-dark" href="#"> {intems} </a> </li>
                        </>
                    })
                }
            </ul>
        </nav>
        
        )
}
