import React from 'react';

import Task from "../Task/Task";

import './TaskList.css'

const TaskList = (props) => {

    // function getTasks() {
    // }


    return (
        <div className="TaskList">
            {
                props.tasks.map((task, index) => (
                    <li key={index}>
                        <Task task={task}/>
                    </li>
                ))
            }
        </div>
    );
}

export default TaskList;
