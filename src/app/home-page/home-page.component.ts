import { Component, OnInit } from '@angular/core';
import { EventService, Event, User } from '../api/event.service';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  events: Array<Event> = [];

  constructor(
    public apiEvent: EventService
  ) { }

  ngOnInit() {
    
    this.apiEvent.getEventList()
    .then((result: Array<Event>) => {
      this.events = result;
    })
    .catch((err) => {
      console.log('Phone list error');
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

}
