import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router 
    .get("/autores", AutoresController.listaAutores)
    .post("/autores", AutoresController.criaAutor)
    .put("/autores/:id", AutoresController.editaAutor)
    .get("/autores/:id", AutoresController.buscaAutorId)
    .delete("/autores/:id", AutoresController.deletarAutor)


export default router;