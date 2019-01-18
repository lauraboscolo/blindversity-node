// Controller lida com as operações de determinado model
const mongoose = require('mongoose');
const Candidate = mongoose.model('Candidate');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query; // pegando parametro page
        // busca os registros no banco de dados, e só executa a próxima linha depois que conseguir
        // pegar todos os registros (isso porque usa await)
        const candidates = await Candidate.paginate({ }, { page, limit: 10 });

        return res.json(candidates);
    },

    async show(req, res){
        const candidate = await Candidate.findById(req.params.id);

        return res.json(candidate);
    },

    async update(req, res){
        // new faz com que retorne o candidato NOVO(atualizado) e não o antigo
        const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true } ); 

        return res.json(candidate);
    },

    async destroy(req, res){
        const candidate = await Candidate.findByIdAndRemove(req.params.id); 

        return res.send();
    },

    async store(req, res){
        const candidate = await Candidate.create(req.body);

        return res.json(candidate);
    },
};