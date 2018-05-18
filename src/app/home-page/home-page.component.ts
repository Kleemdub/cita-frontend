import { Component, OnInit } from '@angular/core';
import { EventService, Event, User } from '../api/event.service';
import { UserService, LoginCredentials } from '../api/user.service';
import { Router } from '@angular/router';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  events: Array<Event> = [];

  constructor(
    public apiEvent: EventService,
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {

    if(!this.userTruc.currentUser) {
      this.resTruc.navigateByUrl('/login');
    }
    
    this.apiEvent.getEventList()
    .then((result: Array<Event>) => {
      this.events = result;
    })
    .catch((err) => {
      console.log('Event list error');
      console.log(err);
    });

    // $(document).ready(function(){
    //   // Nav collapse
    //   $(".button-collapse").sideNav();
    //   // Side buttons
    //   $('.global-container .colG .btn-floating').hover(function(){
    //     $(this).addClass('pulse');
    //   }, function(){
    //     $(this).removeClass('pulse');
    //   });
    //   // Tool tips
    //   $('.tooltipped').tooltip({'delay':10});
    // });
  }

}
