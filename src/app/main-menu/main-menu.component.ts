import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
  }

  logout(){
    this.tokenService.signOut();
    window.location.href='/login';
  }
}


