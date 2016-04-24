export default class HttpException extends Error {
    constructor(httpCode : number, body : string, headers : any, method : string, options : any) {
        super("HttpException");
        this.message = "HttpException";
        this.httpCode = httpCode;
        this.body = body;
        this.headers = headers;
        this.method = method;
        this.options = options;
        this.stack = (<any>new Error()).stack;
    }

    public httpCode : number;
    public body : string;
    public headers : any;
    public options : any;
    public method : string;
    public stack : string;
}