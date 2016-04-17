/// <reference path='../../typings/main.d.ts'/>

import Q = require('q');
import Request = require('request');
import HttpException from './HttpException';
import HttpResponse from './HttpResponse';

export class HttpService {
    public static request(options, method) : Q.Promise<HttpResponse> {
        let deferred = Q.ninvoke<HttpResponse>(Request, method.trim(), options)
            .then<HttpResponse>((result : any) => {
                let statusCode : number = Number(result[0].statusCode);
                let body : string = result[0].body;
                if (statusCode > 299) {
                    let ex = new HttpException(statusCode, body, result[0].headers, method, options);
                    return Q.reject(ex);
                }
                let toReturn = new HttpResponse(statusCode, body);
                return Q.resolve(toReturn);
            });

        return deferred;
    }
}
