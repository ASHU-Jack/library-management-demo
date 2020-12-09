import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from "src/model/user";
import { LoginService } from '../../service/loginService/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit{

  formSubmitted = false;
  userArray: User[] = [];
  userData: User = new User();
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, this.checkPasswords.bind(this)]),
    loginAs: new FormControl('', Validators.required),
    email: new FormControl(null, Validators.compose([Validators.email, Validators.required])),
    // empPhone: new FormControl()
  });

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(){
    this.loginService.getUsersData().subscribe((data: any) => {
      this.userArray = data;
    })
  }

  get firstName(): any {
    return this.userForm ? this.userForm.get('firstName') : null;
  }

  get lastName(): any {
    return this.userForm ? this.userForm.get('lastName') : null;
  }

  get email(): any {
    return this.userForm ? this.userForm.get('email') : null;
  }

  get loginAs(): any {
    return this.userForm ? this.userForm.get('loginAs') : null;
  }

  get password(): any {
    return this.userForm ? this.userForm.get('password') : null;
  }

  get confirmPassword(): any {
    return this.userForm ? this.userForm.get('confirmPassword') : null;
  }

  checkPasswords(group: FormGroup) {
    let pass = this.password;
    let confirmPass = this.confirmPassword;
    if (pass != null) {
      return pass.value === confirmPass.value ? null : { confirmedValidator: true }
    }
    return { confirmedValidator: true };
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if(this.userForm.valid) {
      this.logData();
      this.loginService.addUser(this.userData).subscribe(res => {
        console.log('Product created!');
        this.router.navigateByUrl('/login');
      });
    } else {
        this.resetForm();
        this.formSubmitted = false;
    }
  }

  resetForm() {
    this.userForm.reset();
  }

  logData() {
    this.userData = Object.assign(this.userData, this.userForm.value)
    console.log('First Name:' + this.userData.firstName);
    console.log('Last Name:' + this.lastName.value);
    console.log('Password:' + this.password.value);
    console.log('Confirm Password:' + this.confirmPassword.value);
    console.log('Login As:' + this.loginAs.value);
    console.log('Email:' + this.email.value);
  }
}