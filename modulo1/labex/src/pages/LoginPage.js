import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {voltar, irParaTripDetailsPage} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js";
import {useState} from 'react';


export const LoginPage = () => {
    const navigate = useNavigate()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitLogin = () => {
        console.log(email, password);
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', body)
            .then((response) => {
            console.log('Deu certo', response.data.token);
            localStorage.setItem('token', response.data.token)
    

            irParaTripDetailsPage(navigate)

        }).catch((error) => {
            console.log('Deu errado', error.response)
        })
    };

    return (
        <div>
            <p>LoginPage</p>
            <input 
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />

            <input 
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />

            <button onClick={() => voltar(navigate)}>Voltar</button>
            <button onClick={onSubmitLogin}>Enviar</button>
        </div>
    );
};