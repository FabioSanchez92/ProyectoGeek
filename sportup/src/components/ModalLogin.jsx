import Axios from 'axios';
import React, {useState} from 'react';

export const ModalLogin = ({ show, close }) => {


    const [inputUser, setInputUser] = useState('')
    const [inputPass, setInputPass] = useState('')

    const handleInputChangeUser = (e) =>{
        setInputUser (e.target.value)
    }
    const handleInputChangePass = (e) =>{
        setInputPass (e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUser.trim().length > 2 && inputPass.trim().length > 2) {
            alert(inputUser);
            alert(inputPass);
        }
        
    }

    const prueba = (nom, ape)=>{
            var axios = require('axios');
            var data = JSON.stringify(
                {"id":8,
                "Nombres":nom,
                "Apellidos":ape,
                "Correo":"fabaaaaio_developer@hotmail.com",
                "Contrasena":"Colombisssssa123.",
                "Edad":47,
                "Ciudad":"quibdó"
            });
            
            var config = {
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };
            
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }
    prueba("Moni", "arbe");


    console.log(inputUser);
    console.log(inputPass);
return (
    <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Iniciar Sesión
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Usuaro:</label>
                        <input 
                            type ="text"
                            className="form-control"
                            placeholder="Usuario"
                            value= {inputUser}
                            onChange = {handleInputChangeUser}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">Contraseña:</label>
                        <input 
                            type ="password"
                            className="form-control"
                            placeholder="Contraseña"
                            value= {inputPass}
                            onChange = {handleInputChangePass}
                        />   
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="submit" onClick={handleSubmit} name="iniciarS" className="btn btn-primary">Iniciar Sesión</button>
            </div>
            </div>
        </div>
    </div>
)
};