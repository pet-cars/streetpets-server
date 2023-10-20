import { Request, Response } from "express";
const mysql = require('mysql')

export const login = async (request:Request, response: Response) =>{

    // .post("/register", (request: Request, response: Response) => {

    const valores = request.body.data;

    mysql.query("SELECT * FROM register WHERE email = ? AND senha = ?", 
        Object.values(valores),
        (error: any, result: any) => {
            if (error) {
                console.log("é duru");
                
                console.log(error);
                
            } else {
                console.log(result)
                response.send(result);
            }
        })
    // });

} 