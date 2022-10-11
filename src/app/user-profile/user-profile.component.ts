import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {Subscription} from "rxjs";
import {Profile} from "../model/Profile";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  //todo what is subscriptions?
  subscription: Subscription = new Subscription();
  profile: Profile;

  @ViewChild('buttonProfileListAndSearch') elemRefButtonProfileListAndSearch: ElementRef;
  @ViewChild('buttonCreateUserProfile') elemRefButtonCreateUserProfile: ElementRef;
  @ViewChild('buttonViewMyProfile') elemRefButtonViewMyProfile: ElementRef;

  isButtonProfileListAndSearch = false;
  isButtonCreateUserProfile = false;
  isButtonViewMyProfile = true;

  constructor(private profileService: ProfileService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {

  }

  clickButtonProfileListAndSearch(){
    this.isButtonProfileListAndSearch = true;
    this.isButtonCreateUserProfile = false;
    this.isButtonViewMyProfile = false;
    this.elemRefButtonProfileListAndSearch.nativeElement.classList.add('active');
    this.elemRefButtonCreateUserProfile.nativeElement.classList.remove('active');
    this.elemRefButtonViewMyProfile.nativeElement.classList.remove('active');
  }

  clickButtonCreateUserProfile(){
    this.isButtonProfileListAndSearch = false;
    this.isButtonCreateUserProfile = true;
    this.isButtonViewMyProfile = false;
    this.elemRefButtonProfileListAndSearch.nativeElement.classList.remove('active');
    this.elemRefButtonCreateUserProfile.nativeElement.classList.add('active');
    this.elemRefButtonViewMyProfile.nativeElement.classList.remove('active');
  }

  clickButtonViewMyProfile(){
    this.isButtonProfileListAndSearch = false;
    this.isButtonCreateUserProfile = false;
    this.isButtonViewMyProfile = true;
    this.elemRefButtonProfileListAndSearch.nativeElement.classList.remove('active');
    this.elemRefButtonCreateUserProfile.nativeElement.classList.remove('active');
    this.elemRefButtonViewMyProfile.nativeElement.classList.add('active');
  }

}
