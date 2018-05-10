import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { EventService, Event, User } from '../api/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  eventId: string;
  isCurrentAdmin: boolean = false;
  isParticipant: boolean = false;
  isAnybody: boolean = true;

  constructor(
    private reqTruc: ActivatedRoute,
    public userTruc: UserService,
    public apiEvent: EventService
  ) { }

  ngOnInit() {

    this.reqTruc.paramMap
    .subscribe((myParams) => {
      this.eventId = myParams.get('eventId');
      this.fetchEventData();
    });
  }

  fetchEventData() {
    // component connects to service Here
    this.apiEvent.getEventDetails(this.eventId)
    .then((result: Event) => {
      this.event = result;
      // console.log(this.event);
      const currentUserId = this.userTruc.currentUser._id;

      if(this.event.admin._id == currentUserId) {
        this.isCurrentAdmin = true;
        this.isAnybody = false;
        console.log('isCurrentAdmin : ' + this.isCurrentAdmin);
        console.log('isAnybody : ' + this.isAnybody);
      }

      this.event.selectas.forEach((oneSelecta) => {
        if(oneSelecta._id == currentUserId) {
          this.isParticipant = true;
          this.isAnybody = false;
        }
      });


    })
    .catch((err) => {
      console.log('Phone details error');
      console.log(err);
    });
  }



}
