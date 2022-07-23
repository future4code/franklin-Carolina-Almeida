import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

export const CreateTripPage = () => {
    useProtectedPage()
    return (
        <div>
            <p>CreateTripPage</p>
        </div>
    )
}