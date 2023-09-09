import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router 
    .get("/autores", AutoresController.listaAutores)
    .post("/autores", AutoresController.criaAutor)
    .put("/livros/:id", AutoresController.editaAutor)
    .get("/livros/:id", AutoresController.buscaAutorId)
    .delete("/livros/:id", AutoresController.deletarAutor)


export default router;