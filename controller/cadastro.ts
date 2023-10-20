import { Request, Response } from "express";
const mysql = require('mysql')

export const cadastro = async (request:Request, response: Response) =>{

    // .post("/register", (request: Request, response: Response) => {

    const valores = request.body.data;

    mysql.query("INSERT INTO usuario (nome, rg, cpf, email, senha, cep, cidade, bairro, endereco, numero, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", 
        Object.values(valores),
        (error: any, result: any) => {
            if (error) {
                console.log(error);
                
            } else {
                response.send(result);
            }
        })
    // });

} 