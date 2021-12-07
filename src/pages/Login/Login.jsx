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

    showData() {
        const data = {...this.state}
        console.log('Campos', data)
    }

    render() {
        return (
            <>
                <Header headerText="Página de Login" />
                <div id="loginContent">
                    <form id="login" action="">
                        <input
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            placeholder="E-mail" type="email"
                        />
                        <input
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            placeholder="Senha" 
                            type="password"
                        />
                        <br />
                        <button
                            id="loginButton"
                            className="buttonStyle"
                            type="button"
                            onClick={e => this.showData()}
                        >Login</button>
                        <button id="registerButton" className="buttonStyle" type="button" > Cadastro </button>
                    </form>
                    <div className="registerLink">

                    </div>
                </div>
            </>
        )
    }
}

export default Login;