import express, {Request, Response} from "express";
import cors from "cors";
import { clientes } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/createConta/:id', (req, res) => {
    type usuario = {
        id: number,
        name: string,
        cpf: number,
        niver: number,
        saldo: number,
    }    
    type transacoes = {
        id: string,
        name: string,
        extrato: usuario[]
    }

    const idUser = req.params.id
    const { id, name, cpf, niver, saldo }: transacoes = req.body

    const findUser = clientes.find((clientes) => {
        return clientes.id === idUser
    })

    const newUSer = {
        id,
        name,
        cpf,
        niver,
        saldo
    }

    findUser?.conta.push(newUSer)

    res.status(201).send(findUser)
})

app.get("/clientes/allClientes", (req, res) => {
    res.send('retornando todos os clientes')
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
