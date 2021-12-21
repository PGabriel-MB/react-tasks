import React, { useState } from 'react';

import {
    Container,
    Form,
    Input
} from './styles.js';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const showData = () => {
        const data = { email, password }
        console.log('Campos', data)
    }

    return (
        <Container>
            <Form id="login" action="">
                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail" type="email"
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha" 
                    type="password"
                />
                <br />
                <button
                    id="loginButton"
                    className="buttonStyle"
                    type="button"
                    onClick={e => showData()}
                >Login</button>
                <button id="registerButton" className="buttonStyle" type="button" > Cadastro </button>
            </Form>
        </Container>
    )
}

export default Login;