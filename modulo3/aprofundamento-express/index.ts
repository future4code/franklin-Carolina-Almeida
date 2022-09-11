import express from "express";

import { AddressInfo } from "net";
import {afazeres from "modulo3/aprofundamento-express/afazeres.ts";

const app = express();

app.use(express.json());

//ex1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//ex2 e 3
app.get('/afazeres', (req, res) => {
    type afazer = {
        "userId": number,
        "id": number,
        "title": string,
        "completed": boolean
    }

    const lista = afazeres.map((afazeres) => {
        return afazeres.lista
    }).flat(1);

    res.send(lista);
});

//ex4
app.get("/afazeresConcluidos/:id", (req, res) => {
    const completed = Boolean(req.params.true)
    res.send(`afazeres concluídos`)
})

//ex5
app.post('/createAfazer/:id', (req, res) => {
    type afazer = {
        "userId": number,
        "id": number,
        "title": string,
        "completed": boolean
    }
    type NewAfazer = {
        userId: number,
        id: number,
        title: string,
        completed: boolean,
        afazer: Afazer[]
    }

    const idUser = req.params.id
    const { userId, id, title, completed, afazer}: NewAfazer = req.body

    const findAfazer = userId.find((userId) => {
        return userId.id === userId
    })

    const newAfazer = {
        userId,
        id,
        title,
        completed,
        afazer
    }

    findAfazer?.playlists.push(newAfazer)

    res.status(201).send(findAfazer)
})

//ex7
app.delete('/deleteaAfazer/:id', (req, res) => {

    const afazerId = req.params.afazerId;

    const dadosAtualizados = userId.map((userId) => {
        return userId.afazerId.map((afazerId) => {
            if (afazerId.id === afazerId) {
                return {
                    ...lista,
                    id: []
                }
            } else {
                return afazeres
            }
        })
    });


    res.send(dadosAtualizados);
});

//ex8
app.get('/afazer/:id', (req, res) => {
    const userId = req.params.id

    const findLista = userId.filter(
        (userId) => {
  
            return user.id === id
        })

    res.status(200).send(findLista)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


//https://documenter.getpostman.com/view/22218569/VUxRP6eL