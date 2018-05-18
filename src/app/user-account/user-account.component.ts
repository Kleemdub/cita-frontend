import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
// import { EventService, Event, User } from '../api/event.service';
import { AdminService, Event } from '../api/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  events: Array<Event> = [];
  selectaEvents: Array<Event> = [];

  constructor(
    public userTruc: UserService,
    // public apiEvent: EventService,
    public apiAdmins: AdminService,
    private resTruc: Router
  ) { }

  ngOnInit() {

    if(!this.userTruc.currentUser) {
      this.resTruc.navigateByUrl('/login');
    }

    this.userTruc.check()
    .then(() => {

      const adminId = this.userTruc.currentUser._id;
      const selectaId = this.userTruc.currentUser._id;

      this.apiAdmins.getAdminEventList(adminId)
      .then((result: Array<Event>) => {
        this.events = result;
      })
      .catch((err) => {
        console.log('Admin Event list error');
        console.log(err);
      });

      this.apiAdmins.getSelectaEventList(selectaId)
      .then((result: Array<Event>) => {
        this.selectaEvents = result;
      })
      .catch((err) => {
        console.log('Admin Event list error');
        console.log(err);
      });

    })
    .catch((err) => {
      console.log("App login check error");
      console.log(err);
    });

    

  }

}
