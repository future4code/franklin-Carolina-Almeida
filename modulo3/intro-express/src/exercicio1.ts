import express, { Request, Response } from "express";
import cors from "cors";
import { endianness } from "os";

const app = express();

app.use(express.json());
app.use(cors());

//ex1
app.get("/nome", (req: Request, res: Response) => {          
    res.status (201).send ("criado")
})

//ex2
type usuario = {
    "id": number,
    "name": string,
    "phone": number,
    "email": string,
    "website": string
}

//ex3
const usuarios = [
    {
        "id": 1,
        "name":"Carolina",
        "phone": 12345678,
        "email": "carol@hotmail.com",
        "website":"carol.com"
    },

    {
        "id": 2,
        "name": "Wes",
        "phone": 43218765,
        "email": "wes@hotmail.com",
        "website": "wes.com"
    },

    {
        "id": 3,
        "name": "Lola",
        "phone": 321456789,
        "email": "lola@hotmail.com",
        "website": "lola.com"
    }
]

//ex4
app.get('/users', req: Request, res: Response) => {          
    res.send(usuarios).status(201)
}

//ex5
type posts = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

//ex6 (preferi criar fora do array de usuários, porque cada usuário possui seus próprios posts e num futuro pode confundir)
const arrayDePosts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
]  

//ex7
app.get('/posts', req: Request, res: Response) => {          
    res.send(arrayDePosts).status(201)
}



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});