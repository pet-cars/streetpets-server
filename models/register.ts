const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerSchema = new Schema({
  required: [
    "nome",
    "rg",
    "cpf",
    "email",
    "senha",
    "cep",
    "bairro",
    "endereco",
  ],
  nome: {
    bsonType: "string",
    description: "Deve ser uma string representando o nome do usuário.",
  },
  rg: {
    bsonType: "string",
    description: "Deve ser uma string representando o RG do usuário.",
  },
  cpf: {
    bsonType: "string",
    description: "Deve ser uma string representando o CPF do usuário.",
  },
  email: {
    bsonType: "string",
    description: "Deve ser uma string representando o e-mail do usuário.",
  },
  senha: {
    bsonType: "string",
    description: "Deve ser uma string representando a senha do usuário.",
  },
  cep: {
    bsonType: "string",
    description: "Deve ser uma string representando o CEP do usuário.",
  },
  bairro: {
    bsonType: "string",
    description: "Deve ser uma string representando o bairro do usuário.",
  },
  endereco: {
    bsonType: "string",
    description: "Deve ser uma string representando o endereço do usuário.",
  },
  complemento: {
    bsonType: ["string", "null"],
    description:
      "Pode ser uma string ou nulo representando o complemento do endereço.",
  },
});

module.exports = mongoose.model("register", registerSchema);
