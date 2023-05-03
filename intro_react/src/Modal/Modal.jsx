import React from 'react';
import ReactDOM from 'react-dom';

//RECUERDA: Para usar esta técnica, hemos creado un  en index.html

function Modal({children}){
    //No retornaremos componentes, sino que usaremos createPortal() 
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    );
}

export {Modal}
