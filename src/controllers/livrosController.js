import livros from "../models/Livro.js";


class LivroController {

    // LISTA TODOS OS LIVROS;
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            if(err) {
                console.error('Erro ao buscar livros:', err);
                res.status(500).json({ error: 'Erro ao buscar livros' });
            }else {
                res.status(200).json(livros);
            }
        })
    }

    // ADICIONA LIVRO;
    static adicionaLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar livro`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    // EDITA LIVRO
    static editaLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            }
        })
    }
    
    // BUSCA LIVRO POR ID
    static buscaLivroId = (req, res) => {
        const id = req.params.id;
        
        livros.findById(id, (err, livro) => {
            if (err) {
                res.status(400).send({message: `${err.message} - id não localizado`});
            } else {

                res.status(200).send(livro);
            }
        })
    }

    // DELETA LIVRO POR ID
    static deletaLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err, livro) => {
            if (err) {
                res.status(500).send({message: `${err.message} - id não localizado`});
            } else {
                res.status(200).send({message:`Livro deletado com sucesso`});
            }
        })
    }

}

export default LivroController