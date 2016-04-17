export default class HttpResponse {
    constructor(httpCode: number, body: string) {
        this.httpCode = httpCode;
        this.body = body;
    }
    
    public httpCode: number;
    public body: string;
}