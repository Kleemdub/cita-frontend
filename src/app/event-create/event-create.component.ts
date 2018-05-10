import { Component, OnInit } from '@angular/core';
import { UserService, LoginCredentials } from '../api/user.service';
import { EventService, Event } from '../api/event.service';
declare const $: any;

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  nbSelectas: number;
  nbRounds: number;

  constructor(
    public userTruc: UserService,
    public apiEvent: EventService
  ) { }

  ngOnInit() {


    // $(document).ready(function() {
    //   $('select').material_select();
    // });
    
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