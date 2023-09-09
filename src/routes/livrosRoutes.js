import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivrosByEditora)
    .post("/livros", LivroController.adicionaLivro)
    .put("/livros/:id", LivroController.editaLivro)
    .get("/livros/:id", LivroController.buscaLivroId)
    .delete("/livros/:id", LivroController.deletaLivro)

export default router;