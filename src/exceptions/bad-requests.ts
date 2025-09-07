import { ErrorCode, httpExecption } from "./root.ts"

export class BadRequestsExecption extends httpExecption{
    constructor(message:string, errorCode:ErrorCode){
        super(message, errorCode, 400, null)
    }
}