import express from "express";
import EditoraController from "../controllers/editorasController.js";

const router = express.Router();

router 
    .get("/editoras", EditoraController.listarEditoras)
    .post("/editoras", EditoraController.adicionaEditora)
    .put("/editoras/:id", EditoraController.editaEditora)
    .get("/editoras/:id", EditoraController.buscaEditoraId)
    .delete("/editoras/:id", EditoraController.deletaEditora)


export default router;