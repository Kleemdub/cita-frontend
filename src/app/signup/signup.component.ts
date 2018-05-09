import { Component, OnInit } from '@angular/core';
import { UserService, SignupCredentials } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignupCreds: SignupCredentials = new SignupCredentials();

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {
  }

  signupSubmit() {
    this.userTruc.postSignup(this.formSignupCreds)
    .then((result) => {
      console.log(result);
      this.resTruc.navigateByUrl('/');
    })
    .catch((err) => {
      console.log("Login error");
      console.log(err);
    });
  }

}
