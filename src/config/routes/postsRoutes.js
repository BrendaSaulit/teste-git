import express from "express"; //importando o express para poder utilizar o o servidor 'app'

const routes = (app) => {

    app.use(express.json());//permite que o servidor interprete requisiçoes com corpo no formato JSON (um middleware específico para análise de JSON)

    app.get("/posts", ); //método get, temos uma rota /posts
}

export default routes; //Permite que o conteúdo exportado seja reutilizado em outros arquivos ou módulos.

