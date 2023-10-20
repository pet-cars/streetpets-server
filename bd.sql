create database streetpets;

create table register(
	id int auto_increment key,
    nome varchar(255),
    rg varchar(255),
    cpf varchar(255),
    email varchar(255),
    senha varchar(255),
    cep varchar(255),
    cidade varchar(255),
    bairro varchar(255),
    endereco varchar(255),
    numero varchar(255),
	complemento varchar(255)
);