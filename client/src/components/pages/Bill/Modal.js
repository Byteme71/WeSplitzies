import React from 'react';

const Modal = ({ handleSelect, handleClose, show, children }) => {
    return (
        <div className="modal" style={show ? {display:'block'} : {display:"none"}}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Cancel</button>
            </section>
        </div>
    );
};

export default Modal;