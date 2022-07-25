import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {voltar, irParaCreateTripPage, irParaLoginAdmin} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js";
import {useState} from 'react';


export const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={() => voltar(navigate)}>Voltar</button>
            <button onClick={() => irParaCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => irParaLoginAdmin(navigate)}>Logout</button>
        </div>
    )
}