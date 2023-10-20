import Express  from "express";
const router = Express.Router()

import cadastro from "./cadastro";

export default (): Express.Router =>
{
    cadastro(router)

 return router
}