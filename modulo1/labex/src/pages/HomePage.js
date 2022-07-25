import React from "react";
import {useNavigate} from "react-router-dom";
import {irParaListaDeViagens, irParaLoginAdmin} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js"

export const HomePage = () => {
    const navigate =useNavigate()
   
    return (
        <div>
            <p>HomePage</p>
            <button onClick={() => irParaListaDeViagens(navigate)}>Viagens</button>
            <button onClick={() => irParaLoginAdmin(navigate)}>Login Admin</button>
        </div>
    )
}
