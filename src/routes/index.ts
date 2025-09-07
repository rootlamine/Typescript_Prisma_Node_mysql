import { Router } from "express";
import authRoute from "./auth.ts";

const rootRouter: Router = Router()

rootRouter.use('/auth',authRoute)

export default  rootRouter












