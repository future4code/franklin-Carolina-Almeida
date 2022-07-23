import React from "react";
import {useNavigate} from "react-router-dom";
import {voltar} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()


    return (
        <div>
            <p>ApplicationFormPage</p>
            <button onClick={() => voltar(navigate)}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}