import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = ({hero}) => {
    return (
        <section className={hero}>
            <div className="container">
                <div className="row mb-2">
                    <div className="col-12 offset-md-1 col-md-11">
                        <div className="swiper-container hero-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide slide-content d-flex align-items-center">
                                    <div className="single-slide mt-5">
                                        <h1 data-aos="fade-right" data-aos-delay="200">                                          
                                            Sport Up<br/>Creado para unirte con el deporte 
                                        </h1>
                                        <p data-aos="fade-right" data-aos-delay="600">Te conecta con personas con tus mismos 
                                            gustos deportivos, <br/> para que puedan disfrutar de su afición juntos
                                        </p>
                                        <Link to="" className="btn btn-primary" data-aos="fade-right" data-aos-delay="900">Crear cuenta</Link>
                                        <Link to="" className="btn btn-primary" data-aos="fade-right" data-aos-delay="900">Iniciar sesión</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
