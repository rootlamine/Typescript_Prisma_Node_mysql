import { Router } from "express";
import { login, signup } from "../controllers/auth.ts";
import { errorHandler } from "../../error-handler.ts";

const authRoute:Router = Router()

authRoute.post('/signup', errorHandler(signup))
authRoute.post('/login', errorHandler(login))


export default authRoute