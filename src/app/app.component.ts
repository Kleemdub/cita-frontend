import { Component } from '@angular/core';
import { UserService, LoginCredentials } from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Champions in the Arena';

  constructor(
    public userTruc: UserService
  ) { }
  
  ngOnInit() {
    // check if we are logged immediatly
    this.userTruc.check()
    .catch((err) => {
      console.log("App login check error");
      console.log(err);
    });
  }

  logoutClick() {
    this.userTruc.logout()
    .catch((err) => {
      console.log("App logout error");
      console.log(err);
    });
  }
}
