import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

//RECUERDA: Para usar esta técnica, hemos creado un  en index.html

function Modal({children}){
    //No retornaremos componentes, sino que usaremos createPortal() 
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal}
