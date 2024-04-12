const mongoose = require("mongoose");
const { type } = require("os");

const AlunoSchema = mongoose.Schema({
  nome: String,
  turma: {
    String,
    enum: ["A", "B", "C", "D", "E"],
  },
  notas: [{
    type: Number,
    min: [0, "Não pode por nota menor que zero."],
    max:[10, "Não pode ter nota maior que dez."],
  }],
  media: Number
});

const Aluno = mongoose.model(`Alunos`, AlunoSchema);

module.exports = Aluno;
