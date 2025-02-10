import conectarAoBanco from "../dbConfig.js";//cada ponto signica voltar uma pasta acima desta

//conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


export default async function getTodosOsPosts(params) { //export default pois é uma função que será exportada
    const db = conexao.db("imersao-instabytes") //criando objeto para representar o banco
    const colecao = db.collection("posts") //criando objeto para representar a colecao "posts" dentro do banco
    return colecao.find().toArray()
}

