import React from 'react';

import './AddTaskModal.css';

const AddTaskModal = ({ handleClose, show, addTask }) => {
    const showHideClassName = show ? 'modal display-show' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <h2 id="addTask">Adicionar Tarefa</h2>
                <label htmlFor="taskName_id">Nome da Tarefa:</label>
                <input type="text" name="taskName" id="taksName_id" />

                <label htmlFor="description_id">Descrição:</label>
                <input type="text" name="description" id="description_id" />

                <div className="footerModal">
                    <button className="mr" type="button" onClick={handleClose}>Cancel</button>
                    <button className="btn-save" type="button" onClick={addTask}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal;