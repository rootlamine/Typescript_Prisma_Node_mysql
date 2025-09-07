import { NextFunction, Request, Response } from "express";
import { httpExecption } from "../exceptions/root.ts";

export const errorMiddleware = (error: httpExecption, req:Request, res:Response, next:NextFunction) =>{
    res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
        errors: error.errors
    })
}