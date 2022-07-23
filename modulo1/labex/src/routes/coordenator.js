import React from "react"
import {useNavigate} from "react-router-dom"

export const irParaListaDeViagens = (navigate) => {
        
    navigate("/trips/list")
}
export const irParaLoginAdmin = (navigate) => {
    
    navigate("/login")
}
export const voltar = (navigate) => {
    navigate(-1)
}
export const irParaApplication = (navigate) => {
    
    navigate("/trips/application")
}