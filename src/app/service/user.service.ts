import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";
import {firstValueFrom, Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private createUserUrl = 'http://localhost:8080/users/create';
  private createUserWithProfileUrl = 'http://localhost:8080/users/create/with/profile';
  private getAllUsersUrl = 'http://localhost:8080/users/all/users';
  private checkIfEmailExistsUrl = 'http://localhost:8080/users/check/email/';
  private checkIfUserNameExistsUrl = 'http://localhost:8080/users/check/username/';

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      surname: user.surname,
      username: user.username
    };
    console.log("body ", body);
    return firstValueFrom(this.http.post(this.createUserUrl, body, httpOptions))
      .then((value) => {
        console.log("value ", value);
      });
  }

  createUserWithProfile(user: User) {
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      surname: user.surname,
      username: user.username
    };
    console.log("body ", body);
    return firstValueFrom(this.http.post(this.createUserWithProfileUrl, body, httpOptions))
      .then((value) => {
        console.log("value ", value);
      });
  }

  getAllUsers(): Observable<any> {
    console.log("getAllUsers");
    return this.http.get<User>(this.getAllUsersUrl);
  }

  checkIfEmailExists(email: String) {
    console.log("checkIfEmailExists ", email);
    const url = this.checkIfEmailExistsUrl + email;
    return this.http.get<boolean>(url);
  }

  checkIfUserNameExists(username: String) {
    console.log("checkIfUserNameExists ", username);
    const url = this.checkIfUserNameExistsUrl + username;
    return this.http.get<boolean>(url);
  }
}
