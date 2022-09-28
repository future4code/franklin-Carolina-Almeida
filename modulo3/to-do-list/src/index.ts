import express, {Request, Response} from "express";
import cors from "cors";
import app from "./app";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/user', (req, res) => {
    type user = {
        name: string,
        nickname:  string,
        email: string
    }    

    const nameUser = req.params.name
    const { name, nickname, email }: user = req.body

    const newUSer = {
        name,
        nickname,
        email
    }

    res.status(201).send(nameUser)
})

app.get('/user/:id', (req, res) => {
    const nameUser = req.params.name

    const user = username.filter(
        (user) => {
  
            return user.name === name
        })

    res.status(200).send(findLista)
})