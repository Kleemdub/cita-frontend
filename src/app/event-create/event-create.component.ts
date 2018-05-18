import { Component, OnInit } from '@angular/core';
import { UserService, LoginCredentials } from '../api/user.service';
import { EventService, Event, Round } from '../api/event.service';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  // nbSelectas: number;
  // nbRounds: number;
  // round1duration: number;
  // round2duration: number;
  // round3duration: number;

  newEvent: Event = new Event;
  round1: Round = new Round;
  round2: Round = new Round;
  round3: Round = new Round;

  // scoresObj: any = {
  //   selecta: this.userTruc.currentUser._id,
  //   score: 0
  // };

  scoresObj: any;

  constructor(
    public userTruc: UserService,
    public apiEvent: EventService,
    private resTruc: Router
  ) { }

  ngOnInit() {

    if(!this.userTruc.currentUser) {
      this.resTruc.navigateByUrl('/login');
    }

    // $(document).ready(function() {
    //   $('select').material_select();
    // });
    
  }

  submitCreateEvent() {

    this.scoresObj = {
      selecta: this.userTruc.currentUser._id,
      score: 0
    };

    const eventAdmin = this.userTruc.currentUser._id;

    this.newEvent.title = "";
    this.newEvent.registrations = 1;
    this.newEvent.admin = this.userTruc.currentUser._id;
    this.newEvent.status = "open";
    this.newEvent.selectas.push(eventAdmin);
    this.newEvent.scores1.push(this.scoresObj);
    this.newEvent.scores2.push(this.scoresObj);
    this.newEvent.scores3.push(this.scoresObj);

    // round 1
    this.round1.roundNumber = 1;
    this.round1.status = "displayed";
    this.round1.nbSelectas = this.newEvent.nbSelectas;
    this.round1.isFinal = false;
    this.round1.selectas.push(eventAdmin);
    this.newEvent.rounds.push(this.round1);

    // round 2
    if(this.newEvent.nbRounds == 2) {
      this.round2.roundNumber = 2;
      this.round2.status = "open";
      this.round2.nbSelectas = this.newEvent.nbSelectas;
      this.round2.isFinal = true;
      this.round2.selectas.push(eventAdmin);
      this.newEvent.rounds.push(this.round2);
    }

    // round 3
    if(this.newEvent.nbRounds == 3) {

      this.round2.roundNumber = 2;
      this.round2.status = "open";
      this.round2.nbSelectas = this.newEvent.nbSelectas;
      this.round2.isFinal = false;
      this.round2.selectas.push(eventAdmin);
      this.newEvent.rounds.push(this.round2);

      this.round3.roundNumber = 3;
      this.round3.status = "open";
      this.round3.nbSelectas = 2;
      this.round3.isFinal = true;
      // this.round3.selectas.push(eventAdmin);
      this.newEvent.rounds.push(this.round3);
    }
    
    
    this.apiEvent.createNewEvent(this.newEvent)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('Event creation error');
      console.log(err);
    });
  }

  updateTags(tag) {
    const index = this.newEvent.tags.indexOf(tag);
    // console.log("ok");
    
    if (index === -1) {
      this.newEvent.tags.push(tag);
    }
    else {
      this.newEvent.tags.splice(index, 1);
    }
    console.log(this.newEvent.tags);
  }

}


// title: { type : String, required: true, unique: true },
//     admin: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//         required: true
//     },
//     nbSelectas: { type: Number },
//     selectas: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: 'User'
//         }
//     ],
//     nbRounds:  { type: Number },
//     rounds: [
//         {
//             roundNumber: { type: Number },
//             status: { 
//                 type: String, 
//                 enum: ["open", "ready", "displayed", "closed"],
//                 default: "open"
//             },
//             nbSelectas: { type: Number },
//             duration : { type: Number },
//             isFinal : { type: Boolean },
//             selectas: [
//                 {
//                     type: Schema.Types.ObjectId,
//                     ref: 'User'
//                 }
//             ],
//             genres: [ { type: String } ],
//             style: { type: String },
//             sets: [
//                 {
//                     selecta: {
//                         type: Schema.Types.ObjectId,
//                         ref: 'User'
//                     },
//                     audio: { type: String },
//                     title: { type: String },
//                     description: { type: String },
//                     tracklist: [ 
//                         { 
//                             type: Schema.Types.ObjectId,
//                             ref: 'Tune'
//                         } 
//                     ],
//                     score: { type: Number }
//                 }
//             ]
//         }
//     ],
//     status: {
//         type: String, 
//         enum: ["open", "ready", "displayed", "closed"],
//         default: "open"
//     }