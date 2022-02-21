import React from 'react';
import "./myModal.css"
const MyModal = ({
    visible = false,
    title,
    saveButtonShow = false,
    closeButtonShow= false,
    children,
    onCancel,
    onConfirm,
}) => {
    return (
        <div className={`md-modal ${visible ? 'md-show' : 'md-hidden'}`}
            tabIndex="-1"
            onClick={onCancel}>
            <div className="modal-dialog"
            onClick={(e)=> e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onCancel}
                        />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        {closeButtonShow &&
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => onCancel()}
                            >
                                Cancel</button>}
                        {saveButtonShow && <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => onConfirm()}
                            >
                                OK</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;