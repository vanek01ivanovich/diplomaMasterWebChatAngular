import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {Profile} from "../model/Profile";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private getProfileByIdUrl = 'http://localhost:8080/profile/get/';
  private getProfileByUserIdUrl = 'http://localhost:8080/profile/info/';
  private getAllProfilesUrl = 'http://localhost:8080/profile/get/all';
  private createProfileUrl = 'http://localhost:8080/profile/create';
  private updateProfileUrl = 'http://localhost:8080/profile/update/';
  private activateProfileUrl = 'http://localhost:8080/profile/activate/';
  private deactivateProfileUrl = 'http://localhost:8080/profile/deactivate/';

  constructor(private http: HttpClient) {
  }

  getProfileById(id: number): Observable<Profile> {
    const url = this.getProfileByIdUrl + id;
    return this.http.get<Profile>(url);
  }

  getProfileByUserId(id: number): Observable<Profile> {
    const url = this.getProfileByUserIdUrl + id;
    return this.http.get<Profile>(url);
  }

  getAllProfiles() {
    return this.http.get<Profile[]>(this.getAllProfilesUrl);
  }

  createProfile(profile: Profile) {
    const body = {};
    console.log("body ", body);
    return firstValueFrom(this.http.post(this.createProfileUrl, body, httpOptions))
      .then(value => console.log("value ", value));
  }

  updateProfile(profile: Profile) {
    const url = this.updateProfileUrl + profile.id;
    const body = {};
    return firstValueFrom(this.http.put(url, body)).then(res => console.log("res ", res));
  }

  activateProfile(id: number) {
    this.http.put(this.activateProfileUrl, id);
  }

  deactivateProfile(id: number) {
    this.http.put(this.deactivateProfileUrl, id);
  }

}
