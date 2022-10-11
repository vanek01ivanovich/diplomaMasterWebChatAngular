import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../service/profile.service";
import {Profile} from "../../model/Profile";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import Swal from "sweetalert2";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent implements OnInit {

  user: User;
  registerForm: any;

  //todo check registerForm
  constructor(private profileService: ProfileService,
              private formBuilder: FormBuilder,
              private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,30}')]],
      name: ['', [Validators.required, Validators.maxLength(40)]],
      username: ['', [Validators.required, Validators.maxLength(40)]],
      surname: ['', [Validators.required, Validators.maxLength(40)]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createProfile(profile: Profile) {
    this.profileService.createProfile(profile).then(data => console.log("data {}", data));
  }

  createUser(user: User) {
    this.userService.createUser(user).then(data => console.log('data {}', data))
  }

  onSubmit(value: any) {
    console.log('register {}', this.registerForm.value);
    this.userService.checkIfEmailExists(this.registerForm.value.email).subscribe(value => {
      if (!value) {
        this.userService.checkIfUserNameExists(this.registerForm.value.username).subscribe(val => {
          if (!val) {
            const form = this.registerForm.value;
            form.password = btoa(this.registerForm.value.password);
            console.log('password {}', form.password);
            this.userService.createUserWithProfile(form).then(r => console.log('result create user {}', r));
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text: 'User with such username already exists'
            }).then(() => null);
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'User with such email already exists'
        }).then(() => null);
      }
    });
  }

}
