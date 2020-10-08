import React from 'react'
import { Link } from 'react-router-dom'
import foto from "../img/wilDelgado.jpg"

export const NavBarMuro = ({ NavBarMuro }) => {
    return (
        <header className="header text-center">	    
            <h1 className="nameUser blog-name pt-lg-2 mb-2"><Link href="#">Wilinton Delgado</Link></h1>
            
            <nav className="navbar navbar-expand-lg navbar-dark">
{/*                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
    
                <div id="navigation"  >
                    <div className="profile-section pt-3 pt-lg-0">
                        <img className="profile-image mb-3 rounded-circle mx-auto" src={foto} alt="image"/>			
                        
                        <div className="description bio mb-3">Soy aficionado por los deportes, en especial la natación y el ciclisto.Busco personas con quien practicar y mejorar mi nivel.</div>
                        <hr/> 
                        <ul className="navMuro navbar-nav flex-column text-left ">
                        <li className="nav-item ">
                            <Link className="nav-link" href="#"><span><i className="fa fa-users mr-2"></i></span>Contactos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#"><span><i className="fa fa-calendar-o mr-2"></i></span>Eventos</Link>
                        </li>
                       
                    </ul>
                       
                    </div>
                    <hr/>
                    
                    <ul className=" navMuro navbar-nav flex-column text-left ">
                        <li className="nav-item">
                            <Link className="nav-link" href="#"><span><i className="fa fa-home fa-fw mr-2"></i></span>Medellín</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#"><span><i className="fa fa-bookmark fa-fw mr-2"></i></span>Ciclismo- Natación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#"><span><i className="fa fa-user fa-fw mr-2"></i></span>Novato</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    
    )
} 