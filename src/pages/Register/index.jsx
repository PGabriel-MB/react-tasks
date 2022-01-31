import React from "react";
import { CheckCircle } from 'react-feather';

import {
    Container,
    TitleArea,
    Title,
    Form,
    Input,
    Button,
    AlertArea
} from '../Login/styles'

export const Register = () => {

    return (
        <Container>
            <TitleArea>
                <Title>ToDoer</Title>
                <CheckCircle color='#ffffff' size="100" />
            </TitleArea>
            <Form>
                <Input
                    id="name"
                    name="name"
                    placeholder="Nome"

                />
            </Form>
        </Container>
    )
}