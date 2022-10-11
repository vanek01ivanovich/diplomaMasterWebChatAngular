import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/user.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  user: User;
  email: string;
  name: string;
  username: string;
  password: string;
  role: string;
  surname: string;
  registerForm: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  //todo check formGroup what is it???
  onSubmit() {
    console.log("submit")
    this.user = new User(this.email, btoa(this.password), this.name, this.surname,this.role, this.username)
    console.log(this.user)
    this.userService.createUser(this.user).then(r => console.log("r", r));
  }

  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }


}
