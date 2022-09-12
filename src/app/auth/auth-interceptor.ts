import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "./token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor(private tokenStorage: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('token')){
      let authReq = req;
      const token = this.tokenStorage.getToken();
      if (token != null){
        authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)})
      }
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
