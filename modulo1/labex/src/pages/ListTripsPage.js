import React from "react";
import {useNavigate} from "react-router-dom";
import {voltar, irParaApplication} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js";

export const ListTripsPage = () => {
    const navigate = useNavigate()
   
    return (
        <div>
            <p>ListTripsPage</p>
            <button onClick={() => voltar(navigate)}>Voltar</button>
            <button onClick={() => irParaApplication(navigate)}>Inscreva-se</button>
        </div>
    )
}