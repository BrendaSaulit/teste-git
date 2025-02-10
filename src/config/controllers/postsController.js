async function listarPosts(req, res) { //é necessario por o async no começo da funçao da funcao para poder usar o await depois (sao um parzinho)
    const posts = await getTodosOsPosts() //criando a variavel posts
    res.status(200).json(posts); //Envia uma resposta HTTP com status 200 (OK   ) passando a variavel posts que recebe os dados para json
}