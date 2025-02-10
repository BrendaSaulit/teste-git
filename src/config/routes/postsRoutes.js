import express from "express"; //importando o express para poder utilizar o o servidor 'app'

app.get("/posts", async(req, res) => {  //método get, temos uma rota /posts e é necessario por o async no começo da funçao da funcao para poder usar o await depois (sao um parzinho)
    const posts = await getTodosOsPosts() //criando a variavel posts
    res.status(200).json(posts); //passando a variavel posts que recebe os dados para json
});