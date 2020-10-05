import React from "react";
import imgMoni from "../img/moni.jpg";
import imgWill from "../img/wilDelgado.jpg";
import imgFabi from "../img/fabio.jpg";

export const Equipo = ({ Equipo }) => {
  return (
    <section className="Equipo">
        <div className="container">
            <div className="title text-center">
                <h1 className="title-blue">Equipo</h1>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div className="Equip text-center">
                       <img src={imgFabi} alt="Integrantes" />
                        <p className="desc">Fabio Sanchez</p>
                        <p className="price">DESARROLLADOR FRONTEND</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitatio nullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(204, 187, 0.897)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Equip text-center">
                       <img src={imgWill} alt="Integrantes" />
                        <p className="desc">Wilinton Delgado</p>
                        <p className="price">DESARROLLADOR FRONTEND</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitatio nullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(250, 100, 0)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Equip text-center">
                       <img src={imgMoni} alt="Integrantes" />
                        <p className="desc">Mónica Arbeláez</p>
                        <p className="price">DESARROLLADORA FRONTEND</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitatio nullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}


