import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type cliente = {
    name: string,
    cpf: number,
    niver: number,
    saldo: number,
    extrato: string
}