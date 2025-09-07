import { Request, Response, NextFunction } from "express"
import { ErrorCode, httpExecption } from "./src/exceptions/root.ts"
import { InternalException } from "./src/exceptions/internal-execption.ts"

export const errorHandler = (method: Function) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await method(req, res, next)
        } catch (error: any) {
            let exception: httpExecption
            if (error instanceof httpExecption){
                exception = error
            }else{
                exception = new InternalException('Something went wrong', error, ErrorCode.INTERNAL_EXECEPTION)
            }
            next(exception)
        }
    }
}