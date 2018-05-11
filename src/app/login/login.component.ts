import { Component, OnInit } from '@angular/core';
import { UserService, LoginCredentials } from '../api/user.service';
import { Router } from '@angular/router';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formCreds: LoginCredentials = new LoginCredentials();

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.userTruc.postLogin(this.formCreds)
    .then((result) => {
      console.log(result);
      this.resTruc.navigateByUrl('/');

      // $(document).ready(function(){
      //   $('#btn-user-tool').hover(function(){
      //     $(this).addClass('pulse');
      //   }, function(){
      //     $(this).removeClass('pulse');
      //   });
      //   $('#btn-user-tool').tooltip({'delay':10});
      // });

    })
    .catch((err) => {
      console.log("Login error");
      console.log(err);
    });
  }

}
