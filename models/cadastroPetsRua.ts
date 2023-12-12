const ruamongoose = require("mongoose");
const ruaSchema = mongoose.Schema;
const cadastroPetsRuaSchema = new Schema({
  required: ["aparencia", "localizacao", "sexo", "porte", "especie"],
  properties: {
    aparencia: {
      bsonType: "string",
      description: "Deve ser uma string representando a aparencia do pet.",
    },
    localizacao: {
      bsonType: "string",
      description: "Deve ser uma string representando a localizacao do pet.",
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
      description: "Deve ser uma string representando a especie do pet.",
    },
  },
});

module.exports = ruamongoose.model("cadastroPetsRua", cadastroPetsRuaSchema);
