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

  // POST /api/events
  createNewEvent(newEvent: Event) {
    return this.ajaxEngine
    .post(`${environment.backendUrl}/api/events`, newEvent)
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
  _id?: string;
  title: string;
  admin: any;
  tags: Array<string> = [];
  nbSelectas: number;
  selectas: Array<any> = [];
  nbRounds: number;
  // rounds: Array<any> = [ {}, {}, {} ];
  rounds: Array<Round> = [];
  status: string;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}

export class Round {
  _id: string;
  roundNumber: number;
  status: string;
  nbSelectas: number;
  duration: number;
  isFinal: boolean;
  selectas: Array<any> = [];
  genres: string;
  style: string;
  sets: Array<any> = [];
}


