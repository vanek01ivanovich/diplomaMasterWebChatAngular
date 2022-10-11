import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../../service/profile.service";
import {Subscription} from "rxjs";
import {Profile} from "../../model/Profile";
import {TokenStorageService} from "../../auth/token-storage.service";

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {

  //todo what is subscriptions?
  subscription: Subscription = new Subscription();
  profile: Profile;

  isButtonProfileListAndSearch = false;
  isButtonCreateUserProfile = false;

  constructor(private profileService: ProfileService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    console.info("userId = ", this.tokenStorage.getUserId());
    const userId = this.tokenStorage.getUserId();
    //todo get MY profile for that page, need to find id of my profile
    this.profileService.getProfileByUserId(Number(userId)).subscribe(data => {
      console.log("data profile ", data);
      this.profile = data;
      console.log("profile ", this.profile);
    })
  }


}
