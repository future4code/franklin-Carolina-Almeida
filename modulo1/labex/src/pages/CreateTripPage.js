import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useForm from "./hooks/useForm";

const useProtectedPage = () => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });
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
    const criarViagem = (event) => {
        event.preventDefault();
        cleanFields();
    };

    return (
        <div>
            <p>CreateTripPage</p>
            <form onSubmit={criarViagem}>
                <input
                    name="name"date
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome"}
                    required
                    pattern={"^.{5,}"}
                    type="name"
                />
                 <input
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    placeholder={"Planeta"}
                    required
                    min={18}
                />
                <input
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    placeholder={"Data"}
                    required
                    type="date"
                />
                <input
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    placeholder={"Descrição"}
                    required
                    pattern={"^.{30,}"}
                    type="date"
                />
                <input
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder={"Duração"}
                    required
                    min={50}
                />
            </form>    
        </div>
    )
}