import Express  from "express";

import { login } from "../controller/login";

export default (router: Express.Router) =>{
    router.get('/login', login)
}