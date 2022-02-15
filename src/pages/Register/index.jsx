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

    const handleRegister = () => {}

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
                />
                <Input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    inputMode="email"
                />
                <Input
                    id="password1"
                    name="password1"
                    placeholder="Password"
                    type="password1"
                />
                <Input
                    id="password2"
                    name="password2"
                    placeholder="Confirm password"
                    type="password2"
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