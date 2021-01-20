import React from 'react';

import Task from "../Task/Task";

const TaskList = (props) => {

    function getTasks() {

    }

    return (
        <div>
            {
                props.tasks.forEach(task => (
                    <Task task={task}/>
                ))
            }
        </div>
    );
}

export default TaskList;
