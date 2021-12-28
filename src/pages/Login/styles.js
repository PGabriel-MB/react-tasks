import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(102.8% 100% at 11.200000000000001% 23%, #47c2b1 0%, rgb(24, 73, 66) 100%);
    overflow: hidden;
    z-index: -2;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;

export const Form = styled.form`
    margin: 2em;
    background-color: #ffffff;
    border-radius: 25px;
    padding: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
    text-align: center;
    width: 20rem;
    box-shadow: 0 11px 12px 5px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
    outline: 0;
    background-color: #A3EBE1;
    color: #FFFFFF;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    padding: .5rem .7rem;
    margin-bottom: 4vh;
    font-size: 1.3em;
    ::placeholder {
        color: #FFFFFF;
    }
`;

export const Button = styled.button`
    min-width: 17rem;
    font-weight: 900;
    border-radius: 7px;
    padding: .5rem .7rem;
    font-size: 1.2em;
`;

/* 

#login input, #login button {
    padding: 1rem;
    border: 1px solid gray;
    
    margin-bottom: 4vh;
    
}

#loginButton{
    border: none !important;
    background-color: #47C2B1;
    color: white;
}

#registerButton {
    border: 2px solid #47C2B1;
    color: #47C2B1;
}

.registerLink {
    text-align: center;
} */