import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const app = express();



app.listen(3000, () => {
    console.log("Servidor escutando...");
});




