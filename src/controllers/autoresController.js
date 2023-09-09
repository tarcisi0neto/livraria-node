import autores from "../models/Autor.js";

class AutoresController {

    // LISTA TODOS OS AUTORES;
    static listaAutores = (req, res) => {
        autores.find((err, autores) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao buscar autores'});
            } else {
                res.status(200).json(autores);
            }
        })
    }

    // CRIA AUTOR;
    static criaAutor = (req, res) => {
        let autor = new autores(req.body);
        autores.save((err) => {
            if(err) {
                res.status(500).json({message: `${err.message} - Falha ao cadastrar autor`});
            } else {
                res.status(201).json(autor.toJSON());
            }
        })
    }

    // EDITA AUTOR
    static editaAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send({message: 'Autor atualizado com sucesso'});
            }
        })
    }

    // BUSCA AUTOR POR ID;
    static buscaAutorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err,autor) => {
            if (err) {
                res.status(400).send({message: 'Id não localizado'})
            } else{
                res.status(200).send(autor)
            }
        })
    }

    // DELETA AUTOR;
    static deletarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - id não encontrado`});
            } else {
                res.status(200).send({message: 'Autor deletado com Sucesso'});
            }
        })
    }
}

export default AutoresController