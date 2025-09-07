//message, status code, error codes, erreur

export class httpExecption extends Error {
    message: string;
    errorCode: any
    statusCode: number
    errors: ErrorCode

    constructor(message:string, errorCode:ErrorCode , statusCode:number, error:any){
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = error 
    }
}

export enum ErrorCode{
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXITS = 1002,
    INCORRECT_PASSWORD = 1003,
    UNPROCESSABLE_ENTITY = 2001,
    INTERNAL_EXECEPTION = 3001,
}
