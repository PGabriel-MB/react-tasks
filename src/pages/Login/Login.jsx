import React from 'react';

import Header from "../../components/layout/Header/Header";

import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <>
                <Header headerText="Página de Login" />
                <div id="loginContent">
                    <form id="login" action="">
                        <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} placeholder="E-mail" type="email" />
                        <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} placeholder="Senha" type="password"></input>
                        <br />
                        <button className="buttonStyle" type="button">Login</button>
                    </form>
                    <div className="registerLink">

                    </div>
                </div>
            </>
        )
    }
}

export default Login;