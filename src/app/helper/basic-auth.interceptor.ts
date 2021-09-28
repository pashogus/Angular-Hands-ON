import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor
{
    private username:string = "pashogus";
    private password:string ="ghjkloiuydc987$";
    private authdata: any;

    createBasicAuthToken() {
        this.authdata = window.btoa(this.username + ":" + this.password)
      }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.createBasicAuthToken();
        req = req.clone({
            setHeaders: {         
                Authorization: `Basic ${this.authdata}`
            }
        });
        return next.handle(req);
    }


}