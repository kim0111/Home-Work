import React from 'react';

const Modal = ({children, setVisible, visible}) => {
    return (
        <div className={!visible ? "modal" : "modal active"} onClick={() => setVisible(!visible)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;