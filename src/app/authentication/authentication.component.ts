import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {AuthLoginInfo} from "../model/AuthLoginInfo";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username: string;
  password: string;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService) {
  }


  ngOnInit(): void {
    console.log("on init")
  }

  onSubmit() {
    console.log("on submit")
    this.loginInfo = new AuthLoginInfo(this.username, btoa(this.password));
    console.log(this.loginInfo);
    this.authService.login(this.loginInfo).subscribe(
      data => {
        console.log("data", data);
        console.log('data.authorities ', data.authorities);
        this.tokenStorage.saveUserId(data.userId);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUserName(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.refreshPage();
      }
    );
  }

  refreshPage() {
    window.location.href = 'create';
  }

}
