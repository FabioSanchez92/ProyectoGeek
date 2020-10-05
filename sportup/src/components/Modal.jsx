import React, {useState} from 'react';

export const Modal = ({ show, close }) => {
  return (
    <div id="Modal"className="modal-wrapper "
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>REGISTARSE SPORTUP</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Guardar</button>
          <button onClick={close} className="btn-cancel">Close</button>
          
        </div>
      </div>
    </div>
  )
};