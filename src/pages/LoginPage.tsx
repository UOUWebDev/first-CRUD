import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../components/globalStyle";

const LoginBox = styled.div`
display: flex;
background-color: white;
padding: 10px;
margin: 10px;
width: 50%;
height: 50%;
position: absolute;
top: 10%;
left: 50%; 
transform: translate(-50%, 60%);
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
justify-content: center;
align-items: center;
`;

const InputID = styled.input`
    display: block;
    border: 1px solid;
    height: 25px;
`

const InputPassword = styled.input`
    display: block;
    border: 1px solid;
    height: 25px;
`

const LoginButton = styled.button`
    display: block;
`

export default function LoginPage() {
    const [inputID, setInputID] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const navigate = useNavigate();

    const idChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputID(event.target.value)
    }
    const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(event.target.value)
    }

    const loginButton = () => {
        console.log({ inputID, inputPassword });
        try {
            axios.post('http://localhost:5000/posts', {
                inputID,
                inputPassword
            })
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <LoginBox>
            <GlobalStyle />
            ID: <InputID value={inputID} onChange={idChange} />
            PW: <InputPassword value={inputPassword} onChange={passwordChange} />
            <LoginButton onClick={() => {
                loginButton();
                navigate('/');
                }}>Login
            </LoginButton>
        </LoginBox>
    )
}