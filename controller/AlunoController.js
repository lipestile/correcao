const { json } = require("express")
const Aluno = require("../models/Aluno")

const AlunoController = {
    getAll: async (req, res) => {
        res.json(await Aluno.find())
    },
    get: async (req, res) => {
        try {
            res.json(await Aluno.findById(req.params.id))
        } catch (error) {
            if(error)
            res.status(404).json({error: `registro não encontrado`})
        }
    },
    create: async (req, res) => {
        try {
            let soma = 0
            const notas = req.body.notas
            const alunos = req.body


            for(let n of notas){
                soma += n
            }

            const media = soma / notas.length
            alunos.media = media

            res.json(await Aluno.create(req.body))
        } catch (error) {
            if(error)
            res.status(400).json(error.message)
        }

    },
    update: async (req, res) => {
        try {
            res.json(await Aluno.findByIdAndUpdate(req.params.id, req.body));
        } catch (error) {
            if(error)
            res.status(404).json({error: `registro não encontrado`})
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await Aluno.findByIdAndDelete(req.params.id))
        } catch (error) {
            if(error)
            res.status(404).json({error: `registro não encontrado`})
        }
    },

}
module.exports = AlunoController