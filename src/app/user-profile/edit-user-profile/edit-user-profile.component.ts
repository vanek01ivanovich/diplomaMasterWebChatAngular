import { Component, OnInit } from '@angular/core';
import {Profile} from "../../model/Profile";

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  constructor() { }

  profile: Profile;

  ngOnInit(): void {
  }

}
