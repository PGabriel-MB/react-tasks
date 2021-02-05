import React, { useState } from 'react';

import './AddTaskModal.css';

const AddTaskModal = ({ handleClose, show, addTask }) => {
    const showHideClassName = show ? 'modal display-show' : 'modal display-none';
    
    const [taskName, setTaskName] = useState('');
    const [details, setDetails] = useState('');

    let add = () => {
        addTask(taskName, details);
        handleClose();
    }

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <h2 id="addTask">Adicionar Tarefa</h2>
                <label htmlFor="taskName_id">Nome da Tarefa:</label>
                <input type="text" name="taskName" id="taksName_id" value={taskName} onChange={e => setTaskName(e.target.value)} />

                <label htmlFor="details_id">Descrição:</label>
                <input type="text" name="details" id="details_id" value={details} onChange={e => setDetails(e.target.value)} />

                <div className="footerModal">
                    <button className="mr" type="button" onClick={handleClose}>Cancel</button>
                    <button className="btn-save" type="button" onClick={add}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal;