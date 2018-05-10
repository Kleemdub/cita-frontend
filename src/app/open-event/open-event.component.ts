import { Component, OnInit } from '@angular/core';
import { EventService, Event, User } from '../api/event.service';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-open-event',
  templateUrl: './open-event.component.html',
  styleUrls: ['./open-event.component.css']
})
export class OpenEventComponent implements OnInit {

  events: Array<Event> = [];

  constructor(
    public apiEvent: EventService
  ) { }

  ngOnInit() {

    this.apiEvent.getOpenEventList()
    .then((result: Array<Event>) => {
      this.events = result;
    })
    .catch((err) => {
      console.log('Phone list error');
      console.log(err);
    });

  }

}
