import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { EventService, Event, User, Selecta } from '../api/event.service';
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
  isOpen: boolean = false;
  nbRounds: number;
  nbSelectas: number;
  nbRegistrations: number;
  currentEventStatus: string;
  joinInSelecta: Selecta = new Selecta();
  wanted: number;
  isSetOk: Array<any> = [];

  constructor(
    private reqTruc: ActivatedRoute,
    public userTruc: UserService,
    public apiEvent: EventService,
    private resTruc: Router
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
      this.nbRounds = this.event.nbRounds;
      this.nbSelectas = this.event.nbSelectas;
      this.nbRegistrations = this.event.registrations;
      
      this.wanted = this.event.nbSelectas - this.event.registrations;

      this.event.rounds.forEach((oneRound) => {
        for(let i = 0; i < oneRound.sets.length; i++) {
          // console.log(oneRound.sets[i]._id);
          if(oneRound.sets[i].selecta._id == this.userTruc.currentUser._id) {
            this.isSetOk.push(true);
            return;
          }
        }
        this.isSetOk.push(false);
      });
      // console.log(this.isSetOk);
      
      this.currentEventStatus = this.event.status;
      if(this.currentEventStatus == "open") {
        this.isOpen = true;
      }
      else {
        this.isOpen = false;
      }
      // console.log(this.isOpen);

      this.checkUserStatus();

    })
    .catch((err) => {
      console.log('Phone details error');
      console.log(err);
    });
  }

  checkUserStatus() {
    if(!this.userTruc.currentUser) {
      this.resTruc.navigateByUrl(`/login`);
      return;
    }
    const currentUserId = this.userTruc.currentUser._id;
    if(this.event.admin._id == currentUserId) {
      this.isCurrentAdmin = true;
      this.isAnybody = false;
      console.log('isCurrentAdmin : ' + this.isCurrentAdmin);
      console.log('isAnybody : ' + this.isAnybody);
      return;
    }
    this.event.selectas.forEach((oneSelecta) => {
      if(oneSelecta._id == currentUserId) {
        this.isParticipant = true;
        this.isAnybody = false;
      }
    });
  }

    joinClick() {
    // const { name } = this.event;
    const isOkay = confirm(`Are you sure you want to participate to this event?`);

    if(!isOkay) {
      return;
    }

    this.joinInSelecta._id = this.userTruc.currentUser._id;
    this.joinInSelecta.nickname = this.userTruc.currentUser.nickname;
    this.joinInSelecta.nbRounds = this.nbRounds;
    this.joinInSelecta.nbSelectas = this.nbSelectas;
    this.joinInSelecta.nbRegistrations = this.nbRegistrations;

    this.apiEvent.joinIn(this.eventId, this.joinInSelecta)
    .then((result) => {
      console.log(result);
      this.resTruc.navigateByUrl(`/event/${this.eventId}`);
    })
    .catch((err) => {
      console.log('Phone delete error');
      console.log(err);
    });
  }

}
