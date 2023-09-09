import mongoose from "mongoose";

const editorasSchema = new mongoose.Schema(
    {
        id: { type: String},
        nomeFantasia: { type: String, required: true },
        razaoSocial: { type: String, required: true},
        cnpj: { type: String, required: true }
    },
    {
        versionKey: false,
    }
);

const editoras = mongoose.model('editoras', editorasSchema);

export default editoras;