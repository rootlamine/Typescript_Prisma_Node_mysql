import { ErrorCode, httpExecption } from "./root.ts"

export class NotFoundException extends httpExecption{
    constructor(message:string, errorCode:ErrorCode){
        super(message, errorCode, 404, null)
    }
}