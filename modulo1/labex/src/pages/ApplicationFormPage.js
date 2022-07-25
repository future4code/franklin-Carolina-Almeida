import React from "react";
import {useNavigate} from "react-router-dom";
import {voltar} from "/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/routes/coordenator.js";
import useForm from "./hooks/useForm";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", trip: ""});
    const fazerCadastro = (event) => {
        event.preventDefault(); 
        cleanFields();
    };

    return (
        <div>
            <p>ApplicationFormPage</p>

            <form onSubmit={fazerCadastro}>
                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome"}
                    required
                    pattern={"^.{3,}"}
                    type="name"
                />
                <input
                    name="age"
                    value={form.age}
                    onChange={onChange}
                    placeholder={"Idade"}
                    required
                    min = { 18 } 
                    title={"Acima de 18 anos."}
                 />

                <input
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder={"Texto de apresentação"}
                    required
                    pattern= {"^.{30,}"} 
                    title={"Mínimo 30 caracteres."}
                 />
                <input
                    name="profession"country
                    value={form.profession}
                    onChange={onChange}
                    placeholder={"Profissão"}
                    required
                    pattern = {"^.{10,}"} 
                    title={"Mínimo 10 caracteres."}
                 />
                <input
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    placeholder={"País"}
                    required
                />
                <input
                    name="trip"
                    value={form.trip}
                    onChange={onChange}
                    placeholder={"Viagem"}
                    required
                />                
                <button onClick={() => voltar(navigate)}>Voltar</button>
                <button>Enviar</button>
            </form>
        </div>
    )
}