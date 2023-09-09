import editoras from "../models/Editora.js";

class EditoraController {

    // LISTA TODOS OS EDITORAS;
    static listarEditoras = (req, res) => {
        editoras.find((err, editoras) => {
                if(err) {
                    console.error('Erro ao buscar editoras:', err);
                    res.status(500).json({ error: 'Erro ao buscar editoras' });
                }else {
                    res.status(200).json(editoras);
                }
            });
    }

    // ADICIONA EDITORA;
    static adicionaEditora = (req, res) => {
        let editora = new editoras(req.body);
        editora.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar editora`});
            } else {
                res.status(201).send(editora.toJSON());
            }
        })
    }

    // EDITA EDITORA
    static editaEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send({message: 'Editora atualizado com sucesso'});
            }
        })
    }
    
    // BUSCA EDITORA POR ID;
    static buscaEditoraId = (req, res) => {
        const id = req.params.id;
        
        editoras.findById(id, (err, editora) => {
                if (err) {
                    res.status(400).send({message: `${err.message} - id não localizado`});
                } else {

                    res.status(200).send(editora);
                }
            });
    }

    // DELETA EDITORA POR ID
    static deletaEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (err, editora) => {
            if (err) {
                res.status(500).send({message: `${err.message} - id não localizado`});
            } else {
                res.status(200).send({message:`Editora deletado com sucesso`});
            }
        })
    }
}

export default EditoraController