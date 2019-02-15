import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { RefreshCookieExpireService } from '../services/refreshCookieExpire.service';
@Injectable()
export class ApiPrefix implements HttpInterceptor {

    
    constructor(public http: HttpClient,public router:Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        const changedReq = req.clone(
            {
                withCredentials: true,
                headers: req.headers.set('Content-Type', 'application/json')
                .set('charset','UTF-8'),
                body: this.updateBody(req.body)
            }
        );
        return next.handle(changedReq);
    }


    private updateBody(body) {
        if (typeof (body) == "string") {
            let dateTime = new Date()

            body = JSON.parse(body);
            body.headerReq = {
                "reqID": dateTime.getTime()
            };
            return JSON.stringify(body);
        } else {
            return body;
        }   
    }

}
