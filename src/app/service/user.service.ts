import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {firstValueFrom, Observable} from "rxjs";
import {JwtResponse} from "../model/jwtResponse";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private createUserUrl = 'http://localhost:8080/users/create';
  private getAllUsersUrl = 'http://localhost:8080/users/get';

  constructor(private http: HttpClient) {
  }

  createUser(user: User){
    const body = {name: user.name, email: user.email, password: user.password, role: user.role, surname: user.surname};
    console.log("body ",body);
    firstValueFrom( this.http.post(this.createUserUrl, body,httpOptions))
      .then((value) => {
        console.log("value ",value);
      });
  }

  getAllUsers(): Observable<any>{
    console.log("getAllUsers");
    return this.http.get<User>(this.getAllUsersUrl);
  }
}
