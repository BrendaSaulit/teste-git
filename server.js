import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});


async function getTodosOsPosts(params) {
    const db = conexao.db("imersao-instabytes") //criando objeto para representar o banco
    const colecao = db.collection("posts") //criando objeto para representar a colecao "posts" dentro do banco
    return colecao.find().toArray()
}

app.get("/posts", async(req, res) => {  //método get, temos uma rota /posts e é necessario por o async no começo da funçao da funcao para poder usar o await depois (sao um parzinho)
    const posts = await getTodosOsPosts() //criando a variavel posts
    res.status(200).json(posts); //passando a variavel posts que recebe os dados para json
});