import React from 'react'
import '../Modal.css';

//render form container MODAL  
const FormModal = ({ close , show, children, time}) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Confirm Time {time}</h3>
                    <span className="close-modal-btn" onClick={close}>×</span>
                </div>
                <div className="modal-body">
                 {children}
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default FormModal;



