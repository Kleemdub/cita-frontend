import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';

@Injectable()
export class EventService {

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  // GET /api/events
  getEventList() {
    return this.ajaxEngine
    // .get('http://localhost:3000/api/events')
    .get(`${environment.backendUrl}/api/events`)
    .toPromise();
  }

}

export class User {
  _id: string;
  nickname: string;
  email: string;
  // encryptedPassword: string;
  role: string;
  cup: number;
  // avatar: string;
  events: Array<string>;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}

export class Event {
  _id: string;
  title: string;
  admin: User;
  tags: Array<string>;
  nbSelectas: number;
  selectas: Array<User>;
  nbRounds: number;
  rounds: Array<number>;
  status: string;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}

export class Round {
  _id: string;
  roundNumber: number;
  status: string;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}




// roundNumber: { type: Number },
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
