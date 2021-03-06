import React from 'react';

import AddTaskModal from "../AddTaskModal/AddTaskModal";

import './AddFAB.css';


class AddFAB extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }

    addTask = ({ taskName, details }) => {
        let newTask = {
            taskName,
            details
        }

        //let oldList = this.props.tasks;
        this.props.configTasks(prevState => {
            return [...prevState].concat(newTask)
        });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.showModal} className="AddFAB">
                    <strong>+</strong>
                </button>
                <AddTaskModal show={this.state.show} addTask={this.addTask} handleClose={this.hideModal} />
            </div>
        )
    }
}

export default AddFAB;