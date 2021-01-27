import React from 'react';

import './AddTaskModal.css';

const AddTaskModal = ({ handleClose, show }) => {
    const showHideClassName = show ? 'modal display-show' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <span>I'm a Modal!!</span>
            </div>
        </div>
    )
}

export default AddTaskModal;