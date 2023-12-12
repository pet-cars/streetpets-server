const petsmongoose = require("mongoose");
const petsSchema = mongoose.Schema;
const cadastroPetsSchema = new Schema({
  required: [
    "nome",
    "castrado",
    "vacinadoContraRaiva",
    "sexo",
    "porte",
    "especie",
  ],
  properties: {
    nome: {
      bsonType: "string",
      description: "Deve ser uma string representando o nome do pet.",
    },
    castrado: {
      bsonType: "string",
      description:
        "Deve ser uma string representando se o pet é castrado ou não.",
    },
    vacinadoContraRaiva: {
      bsonType: "string",
      description:
        "Deve ser uma string representando se o pet é vacinado contra a raiva.",
    },
    sexo: {
      bsonType: "string",
      description: "Deve ser uma string representando o sexo do pet.",
    },
    porte: {
      bsonType: "string",
      description: "Deve ser uma string representando o porte do pet.",
    },
    especie: {
      bsonType: "string",
      description: "Deve ser uma string representando a espécie do pet.",
    },
  },
});

module.exports = petsmongoose.model("cadastroPets", cadastroPetsSchema);
