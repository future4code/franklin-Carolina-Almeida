import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {voltar, irParaCreateTripPage, irParaLoginAdmin, irParaTripDetailsPage} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js";

const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token === null) {
            console.log("Não está logado!")
            history.push("/login")
        }
    }, [])
}

export const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/22LiyKBFF1ScADw5ERPW",
      {
        headers: {
            auth: token
        }
      }) 
        .then((response) => {
            console.log(response.data)
            
        }).catch((error) => {
            console.log("Deu erro", error.response)
        })    
    }, [])

    return (
        <div>
            <button onClick={() => voltar(navigate)}>Voltar</button>
            <button onClick={() => irParaCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => irParaLoginAdmin(navigate)}>Logout</button>
            <p onClick={() => irParaTripDetailsPage(navigate)}>Viagens Detalhadas</p>
        </div>
    )
}