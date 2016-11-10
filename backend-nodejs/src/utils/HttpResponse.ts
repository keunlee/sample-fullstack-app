export default class HttpResponse {
  public httpCode : number;
  public body : string;
  
    constructor(httpCode : number, body : string) {
        this.httpCode = httpCode;
        this.body = body;
    }
}
