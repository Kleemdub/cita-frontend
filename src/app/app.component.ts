import { Component } from '@angular/core';
import { UserService, LoginCredentials } from './api/user.service';
import { Router } from '@angular/router';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Champions in the Arena';

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }
  
  ngOnInit() {
    // check if we are logged immediatly
    this.userTruc.check()
    .catch((err) => {
      console.log("App login check error");
      console.log(err);
    });

    $(document).ready(function(){
      // Nav collapse
      $(".button-collapse").sideNav();
      // Side buttons
      $('.global-container .colG .btn-floating').hover(function(){
        $(this).addClass('pulse');
      }, function(){
        $(this).removeClass('pulse');
      });
      // Tool tips
      $('.tooltipped').tooltip({'delay':10});
    });
  }

  logoutClick() {
    this.userTruc.logout()
    .then((result) => {
      console.log(result);
      this.resTruc.navigateByUrl('/');
    })
    .catch((err) => {
      console.log("App logout error");
      console.log(err);
    });
  }
}
