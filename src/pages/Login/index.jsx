import React, { useState, useEffect, useContext } from 'react';
import { CheckCircle } from 'react-feather';
import { useHistory } from 'react-router-dom';

import { Auth } from '../../services/api/auth.js';
import { Storage } from '../../services/storage.js';
import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    TitleArea,
    Title,
    Form,
    Input,
    Button,
    AlertArea
} from './styles.js';

const Login = () => {
    const { dispatch: userDispatcher } = useContext(UserContext);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');

    
    const verifyUserAndToken = ({ userId, token }) => {
        if(token && userId)
            Auth.validateToken({ token, userId })
                .then(res => {
                    userDispatcher({
                        type: 'setUser',
                        payload: res.data
                    });
                    history.push('/dashboard')
                })
                .catch(err => console.log('Erro', err));
    }


    useEffect(() => {
        const token = Storage.getToken()
        const userId = Storage.getUserId()

        verifyUserAndToken({ userId, token })
    });


    const showData = () => {
        const data = { email, password }
        console.log('Campos', data, formValid, alertMessage)
    }

    const clearAlertMessage = () => {
        setTimeout(() => setFormValid(true), 3000);
    }

    const isEmpty = () => {
        if (email && password)
            return false
        return true
    }


    const handleLogin = () => {
        if (isEmpty()) {
            setAlertMessage('Preencha todos os campos!')
            setFormValid(false)
            clearAlertMessage();
            return
        }
        
        setFormValid(true)

        Auth.login({ email, password })
            .then(res => {
                userDispatcher({ type: 'setUser', payload: res.data })
                history.push('/dashboard')
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
                    required
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha" 
                    type="password"
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
                        onClick={e => handleLogin()}
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
                        onClick={()=> showData()}
                    > Cadastro </Button>
                </div>
                { !formValid &&
                <AlertArea>{alertMessage}</AlertArea> }
            </Form>
        </Container>
    )
}

export default Login;