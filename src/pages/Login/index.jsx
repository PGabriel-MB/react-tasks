import React, { useState, useEffect, useContext } from 'react';
import { CheckCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';

import { Auth } from '../../services/auth.js';
import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    TitleArea,
    Title,
    Form,
    Input,
    Button
} from './styles.js';

const Login = () => {
    const { dispatch: userDispatcher, state: user } = useContext(UserContext);
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');


    const showData = () => {
        const data = { email, password }
        console.log('Campos', data, formValid, alertMessage)
    }

    const isEmpty = (value) => {
        if (value)
            setFormValid(true)
        else {
            setFormValid(false);
            setAlertMessage('Preencha todos campos!')
        }
    }

    const handleLogin = () => {
        if (!formValid)
            return
        
        Auth.login({ email, password })
            .then(res => {
                userDispatcher({ type: 'setUser', payload: res.data })
                navigate('/dashboard')
            })
            .catch(err => console.log('Erro: ', err))
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
                    onBlur={e => isEmpty(e.target.value)}
                    required
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha" 
                    type="password"
                    onBlur={e => isEmpty(e.target.value)}
                    required
                />
                <br />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '1em 1em'
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