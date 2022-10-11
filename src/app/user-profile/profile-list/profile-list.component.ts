import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  //todo here profile search
  constructor(private http: HttpClient, private profileService: ProfileService) { }


  ngOnInit(): void {
  }

  getAllProfiles() {
    console.log("getAllProfiles");
    this.profileService.getAllProfiles().subscribe(data => {
      console.log("getAllProfiles data ", data);
    })
  }
}
