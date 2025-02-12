import express from "express";
import routes from "./src/routes/postsRoutes.js";//importando a funçao routes do arquivo postsRoutes.js


const app = express();
routes(app);// usando a funçao criada em Routes, passando o servidor app criado em server.js 


app.listen(3000, () => {
    console.log("Servidor escutando...");
});




