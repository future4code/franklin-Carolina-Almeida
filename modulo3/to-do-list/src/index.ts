import express, {Request, Response} from "express";
import knex from "knex";
import dotenv from "dotenv";
import cors from "cors";
import app from "./app";
import createUser from './endpoints/createUser'
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";

dotenv.config()

export const connection = knex({
    client:'mysql',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})

const app = express();

app.use(express.json());
app.use(cors());

app.put('/user', createUser)
app.get('/user:id', getUserById)
app.post('/user/edit/:id', editUser)

app.put ('/task', createTask)
app.get ('/task/:id', getTaskById)

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})