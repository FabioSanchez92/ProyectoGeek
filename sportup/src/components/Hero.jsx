import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ModalLogin} from './ModalLogin';

export const Hero = ({hero}) => {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

    const [registro, setRegistro] = useState(false);
    const closeModalHandler1 = () => setRegistro(false);

    return (
        <div className="container">
            <div className="jumbotron">
                    <h2>Sport Up<br/>Creado para unirte con el deporte </h2>
                    <p className="Sport">Te conecta con personas con tus mismos 
                    gustos deportivos, <br/> para que puedan disfrutar de su afición juntos
                    </p>
                                            
                    
                    <div  className="form-group">
                        <div className="row">
                            
                            <div className="col-2">
                            { show ? 
                                <div onClick={closeModalHandler} className="">

                                </div> : null 
                                }
                                <Link to="" onClick={() => setShow(true)} className="btn btn-primary"   data-toggle="modal" data-target="#exampleModal"  data-aos="fade-right">Iniciar Sesión</Link>
                                <ModalLogin show={show} close={closeModalHandler} />
                            </div>
                            <div className="col-2">
                            { registro ? 
                                <div onClick={closeModalHandler1} className="">

                                </div> : null 
                                }
                                <Link to="" onClick={() => setRegistro(true)} className="btn btn-primary mr-"   data-toggle="modal" data-target="#exampleModal"  data-aos="fade-right">Crear Cuenta</Link>
                                <ModalLogin registro={registro} close={closeModalHandler1} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
