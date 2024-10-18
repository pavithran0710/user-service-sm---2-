import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-module';
  userDetails = null as any;

  userToUpdate = {
    id: "",        // Change from userid to id
    username: "",
    password: "",
    email: "",
    role: ""      // Add role field
  };

  constructor(private userService: UserService) {
    this.getUserDetails();
  }

  register(registerForm: NgForm) {
    this.userService.registerUser(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getUserDetails();
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  getUserDetails() {
    this.userService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.userDetails = resp;
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user.id).subscribe(  // Change from user.userid to user.id
      (resp) => {
        console.log(resp);
        this.getUserDetails();
      }, (err) => {
        console.log(err);
      }
    );
  }

  edit(user: any) {
    this.userToUpdate = { ...user };  // Update the user object correctly
  }

  updateUser() {
    this.userService.updateUser(this.userToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getUserDetails(); // Ensure the details are refreshed
      }, (err) => {
        console.log(err);
      }
    );
  }
}
