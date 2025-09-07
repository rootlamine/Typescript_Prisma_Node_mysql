import { ErrorCode, httpExecption } from "./root.ts";

export class InternalException extends httpExecption {
    constructor(message: string, errors: any, errorCode: ErrorCode){
        super(message, errorCode, 500, errors)
    }
}