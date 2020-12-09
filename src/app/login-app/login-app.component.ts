import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user';

import { LoginService } from 'src/service/loginService/login.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  formSubmitted = false;
  id: number = 0;
  userArray: User[] = [];
  userForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required]),
    loginAs: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private loginService: LoginService) {
  }

  getUsers(): void {
    this.loginService.getUsersData().subscribe((data: any) => {
      this.userArray = data;
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  get password(): any {
    return this.userForm ? this.userForm.get('password') : null;
  }

  get email(): any {
    return this.userForm ? this.userForm.get('email') : null;
  }

  get loginAs(): any {
    return this.userForm ? this.userForm.get('loginAs') : null;
  }

  onSubmit(): void {
    if (this.userForm.valid && this.doLoginValidation()) {
      this.formSubmitted = true;
      this.logData();
      if (this.loginAs.value === "librarian") {
        this.router.navigateByUrl('login/' + this.loginAs.value);
      } else {
        this.router.navigate(['login/'+ this.loginAs.value, this.id]);
      }
    } else {
      this.resetForm();
    }
  }

  doLoginValidation(): any {
    let isTrue: Boolean = false;
    const email = this.email.value;
    const password = this.password.value;
    const loginAs = this.loginAs.value;

    for (let user of this.userArray) {
      if (user.email === email && user.password === password && user.loginAs === loginAs) {
        this.id = user.id;
        console.log("inside if " + user.email, user.password, user.loginAs);
        isTrue = true;
        break;
      } else {
        console.log("inside else " + user.email, user.password, user.loginAs);
        continue;
      }
    }

    return isTrue;
  }

  resetForm() {
    this.userForm.reset();
  }

  logData() {
    console.log('First Name:' + this.email.value);
    console.log('Last Name:' + this.password.value);
    console.log('Password:' + this.loginAs.value);
  }
}