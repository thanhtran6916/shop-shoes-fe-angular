import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = localStorage.getItem("Token");
    if (token) {
      req = req.clone({
        setHeaders: {Authorization: token}
      });
    }
    console.log(req)
    return next.handle(req);
  }
}
