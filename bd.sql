create database streetpets;

create table register(
	id int auto_increment key,
    nome varchar(255),
    rg varchar(255),
    cpf varchar(255),
    email varchar(255),
    senha varchar(255),
    cep varchar(255),
    bairro varchar(255),
    endereco varchar(255),
	complemento varchar(255) null
);

create table cadastroPets(
	id int auto_increment key,
    nome varchar(255),
    castrado varchar(255),
    vacinadoContraRaiva varchar(255),
    sexo varchar(255),
    porte varchar(255),
    especie varchar(255)
);

create table cadastroPetsRua(
	id int auto_increment key,
    aparencia varchar(255),
    localizacao varchar(255),
    sexo varchar(255),
    porte varchar(255),
    especie varchar(255)
);