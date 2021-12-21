import  React  from "react";

import './Task.css';

const Task = (props) => {
    return (
        <div className="Task">
            <div className="TaskHeader">
                <h2>{ props.task.taskName }</h2>
            </div>
            <div className="TaskContent">
                { props.task.details }
            </div>
        </div>
    );
}

export default Task;