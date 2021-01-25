import React from 'react';

import './AddTaskModal.css';

const AddTaskModal = ({ handleClose, show }) => {
    const showHideClassName = show ? 'modal display-show' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <h2>I'm a Modal!!</h2>
            </div>
        </div>
    )
}

export default AddTaskModal;