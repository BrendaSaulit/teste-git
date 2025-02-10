import express from "express"; //importando o express para poder utilizar o o servidor 'app'
import { listarPosts } from "../controllers/postsController.js"; //O vsCode coloca o import automatico quando chamamos a função que esta em controller, mas não coloca o .js no final do nome do arquivo (é necessario no Node)

const routes = (app) => {

    app.use(express.json());//permite que o servidor interprete requisiçoes com corpo no formato JSON (um middleware específico para análise de JSON)

    app.get("/posts", listarPosts); //método get, temos uma rota /posts. AQUI listarPosts vem da pasta Controllers (para separar as responsabilidades, cada pasta tem uma função)
}

export default routes; //Permite que o conteúdo exportado seja reutilizado em outros arquivos ou módulos.

