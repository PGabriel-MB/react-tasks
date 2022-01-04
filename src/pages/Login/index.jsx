import React, { useState } from 'react';
import { CheckCircle } from 'react-feather';

import {
    Container,
    TitleArea,
    Title,
    Form,
    Input,
    Button
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
            <TitleArea>
                <Title>ToDoer</Title>
                <CheckCircle color='#ffffff' size="100" />
            </TitleArea>
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
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 1em'
                }}>
                    <Button
                        id="loginButton"
                        type="button"
                        style={{
                            border: 'none',
                            backgroundColor: '#47C2B1',
                            color: 'white',
                        }}
                        onClick={e => showData()}
                    >Login</Button>
                    <Button
                        id="registerButton"
                        className="buttonStyle"
                        type="button"
                        style={{
                            border: '1px solid #47C2B1',
                            color: '#47C2B1',
                            backgroundColor: '#ffffff',
                        }}
                    > Cadastro </Button>
                </div>
            </Form>
        </Container>
    )
}

export default Login;