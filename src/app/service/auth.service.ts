import {Injectable} from '@angular/core';
import {AuthLoginInfo} from "../model/AuthLoginInfo";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/jwtResponse";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginPageUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {
  }

  login(credentials: AuthLoginInfo): Observable<JwtResponse> {
    console.log('login');
    return this.http.post<JwtResponse>(this.loginPageUrl, credentials, httpOptions);
  }
}
