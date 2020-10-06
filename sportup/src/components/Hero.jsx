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
                    <h2>SportUp</h2>
                    <p> Adipisicing labore pariatur veniam eiusmod adipisicing aute laborum. </p>
                    <div  className="form-group">
                        <div className="row">
                            <div className="col-6">
                            { show ? 
                                <div onClick={closeModalHandler} className="">

                                </div> : null 
                                }
                                <Link to="" onClick={() => setShow(true)} className="btn btn-primary mr-2"   data-toggle="modal" data-target="#exampleModal"  data-aos="fade-right">Iniciar Sesión</Link>
                                <ModalLogin show={show} close={closeModalHandler} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
