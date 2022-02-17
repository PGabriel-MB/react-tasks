import React, { useState } from "react";
import { CheckCircle } from 'react-feather';
import { Link } from "react-router-dom";

import {
    Container,
    TitleArea,
    Title,
    Form,
    Input,
    Button,
    AlertArea
} from '../Login/styles'

import { Auth } from '../../services/api/auth.js'


export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');


    const isValidForm = () => {
        if (!name || !email || !password1 || !password2)
            return false
        return true
    }

    const isSamePassword = () => {
        if (password1 !== password2)
            return false
        return true
    }

    const handleRegister = () => {
        if (isValidForm()) {
            if (isSamePassword()) {
                const data = { name, email, password1 };
                
                Auth.register(data)
                    .then(res => {
                        // Success alert message
                    })
                    .catch()
            } else {
                //Alert message to Set
            }
        } else {
            // Alert Message to set
        }
    }

    return (
        <Container>
            <TitleArea>
                <Title>ToDoer</Title>
                <CheckCircle color='#ffffff' size="100" />
            </TitleArea>
            <Form>.,
                <Input
                    id="name"
                    name="name"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    inputMode="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    id="password1"
                    name="password1"
                    placeholder="Password"
                    type="password1"
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                />
                <Input
                    id="password2"
                    name="password2"
                    placeholder="Confirm password"
                    type="password2"
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    onBlur={e => isSamePassword()}
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
                    >Cadastrar</Button>
                    <Link
                        to="/"
                        id="goToLogin"
                        className="buttonStyle"
                        type="button"
                        style={{
                            border: '2px solid #47C2B1',
                            color: '#47C2B1',
                            backgroundColor: '#ffffff',
                            minWidth: '8rem',
                            fontWeight: '900',
                            borderRadius: '7px',
                            padding: '.5rem .7rem',
                            fontSize: '1em',
                            textDecoration: 'none'
                        }}
                    > Login </Link>
                </div>
            </Form>
        </Container>
    )
}