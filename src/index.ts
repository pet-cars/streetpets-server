import rotas from "../rotas"
import express from 'express'
import { Router, Request, Response } from 'express'
import bdConexao from '../config/banco'
import { generateToken } from "./token";
import { authenticateToken } from "../middleware";

const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const router = Router();

// const useRoute = require("./routes/Form");
app.use(express.json())

// app.use("/Form", useRoute)

app.get('/', (request: Request, response: Response) => {
    console.log('vamo');
    response.json({ message: "vai" })
})

app.post("/login", async (request: Request, response: Response) => {

    const valores = request.body

    bdConexao.query("SELECT * FROM register WHERE email = ? AND senha = ?", [valores.email, valores.senha], (error: Error, result: any) => {
        if (error) {return response.json(error)}
        else { 
            if (result.length > 0) {
                const token = generateToken({ valores });
                return response.json({message: 'Usuário encontrado', dados: result, token})
            } else {
                return response.json({message: 'Usuário não encontrado', dados: result})
            }
        }
    })
})

app.get('/recurso-protegido', authenticateToken, (req: any, res: Response) => {
    const user = req.headers['authorization'];
    console.log(user)
    return res.json({ message: `Recurso protegido acessado por ${user}` });
});

app.post("/register", (request: Request, response: Response) => {

    //response.json({message: "Funcionando"})

    try {
        const valores = request.body
        const parametros = [valores.nome, valores.rg, valores.cpf, valores.email, valores.senha, valores.cep, valores.bairro, valores.endereco, valores.complemento]
        const query = "INSERT INTO register (nome, rg, cpf, email, senha, cep, bairro, endereco, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) "
        console.log(request.body.data);

        bdConexao.query(query, parametros)
        response.status(200).json({ message: "Dados inseridos com sucesso", recebe: valores, valoresReceibdos: parametros })
    }
    catch {
        (error: any, result: any) => {
            if (error) {
                console.log(error);
            } else {
                response.send(result);
            }
        }
    }
});
app.get('/dados-dono/:id', (request: Request, response: Response) => {
    const valores = request.params.id

    bdConexao.query("SELECT * FROM register WHERE id = ?", [valores], (error: Error, result: any) => {
        if (error) {return response.json(error)}
        else { 
            if (result.length > 0) {
                return response.json({dados: result})
            } else {
                return response.json({message: 'Dados não encontrados', dados: result})
            }
        }
    })
})
// app.use('/', rotas())
app.listen(3333, () => "Backend Funcionando")

