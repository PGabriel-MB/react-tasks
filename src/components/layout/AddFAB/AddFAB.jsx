import React from 'react';

import './AddFAB.css';


class AddFAB extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({ show: true });
        console.log(this.state.show)
    }

    hideModal() {
        this.setState({ show: false });
    }

    render() {
        return (
            <button type="button" onClick={this.showModal()} className="AddFAB">
                <strong>+</strong>
            </button>

        )
    }
}

export default AddFAB;