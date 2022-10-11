import {Injectable} from '@angular/core';

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'email';
const USER_ID = 'id';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor() {
  }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public saveUserId(userId: number) {
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, String(userId));
  }

  public getUserId() {
    return sessionStorage.getItem(USER_ID) as string;
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) as string;
  }

  public saveUserName(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY) as string;
  }

  public saveAuthorities(authorities: string[]) {
    console.log("saveAuthorities : ", authorities)
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!)
        .forEach((authority: { authority: string }) => {
          this.roles.push(authority.authority);
        })
    }
    return this.roles;
  }
}
