import { ErrorCode, httpExecption } from "./root.ts";

export class UnproccessableEntity extends httpExecption{
    constructor(error: any, message: string, errorCode: ErrorCode){
        super(message, errorCode, 422, error)
    }
}