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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
`;

export const TitleArea = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const Title = styled.span`
    color: #ffffff;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    font-size: 5rem;
`

export const Form = styled.form`
    margin: 2em;
    background-color: #ffffff;
    border-radius: 25px;
    padding: 5em 4em;
    text-align: center;
    width: 20rem;
    box-shadow: 0 11px 12px 5px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
    outline: 0;
    background-color: #A3EBE1;
    color: #FFFFFF;
    padding: 2rem;
    border: none;
    border-radius: 8px;
    padding: .7rem .7rem;
    margin-bottom: 4vh;
    font-size: 1.3em;
    font-weight: bolder;
    ::placeholder {
        color: #FFFFFF;
    }
`;

export const Button = styled.button`
    min-width: 8rem;
    font-weight: 900;
    border-radius: 7px;
    padding: .5rem .7rem;
    font-size: 1em;
`;
