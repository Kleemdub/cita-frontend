import { Component, OnInit } from '@angular/core';
import { EventService, Event, User } from '../api/event.service';
import { UserService } from '../api/user.service';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  events: Array<Event> = [];
  setNames: Array<String> = [];
  setHtml: Array<String> = [];

  constructor(
    public apiEvent: EventService,
    public userTruc: UserService
  ) { }

  ngOnInit() {
    this.apiEvent.getEventList()
    .then((result: Array<Event>) => {
      this.events = result;
      this.events.forEach((oneEvent) => {
        oneEvent.rounds.forEach((oneRound) => {
          if(oneRound.status == "displayed") {
            oneRound.sets.forEach((oneSet) => {
              this.setNames.push(oneSet.title);
              var newName = oneSet.title;
              newName = newName.toLowerCase();
              newName = newName.replace(/ /g, "-");
              var mixHtml = `<iframe class="mix-cloud-widget" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FChampionsInTheArena%2F${newName}%2F&amp;hide_cover=1&hide_artwork=1&amp;light=1" frameborder="0"></iframe>`;
              this.setHtml.push(mixHtml);
            });
          }
        });
      });
      // console.log(this.setHtml);
    })
    .catch((err) => {
      console.log('Event list error');
      console.log(err);
    });
  }

}

