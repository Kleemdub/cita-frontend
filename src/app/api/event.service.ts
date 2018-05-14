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

  // GET /api/events/:eventId
  getEventDetails(eventId: any) {
    return this.ajaxEngine
    // .get('http://localhost:3000/api/events')
    .get(`${environment.backendUrl}/api/events/${eventId}`)
    .toPromise();
  }

  // GET /api/events/open
  getOpenEventList() {
    return this.ajaxEngine
    // .get('http://localhost:3000/api/events')
    .get(`${environment.backendUrl}/api/events/open`)
    .toPromise();
  }

  // POST /api/events
  createNewEvent(newEvent: Event) {
    return this.ajaxEngine
    .post(`${environment.backendUrl}/api/events`, newEvent)
    .toPromise();
  }

  // PUT /api/events/:eventId
  joinIn(eventId: any, selecta: Selecta) {
    return this.ajaxEngine
    .put(`${environment.backendUrl}/api/events/${eventId}`, selecta)
    .toPromise();
  }

  // PUT /api/events/launch/:eventId
  launchEvent(eventId: any, count: string) {
    return this.ajaxEngine
    .put(`${environment.backendUrl}/api/events/launch/${eventId}`, count)
    .toPromise();
  }

}

export class Selecta {
  _id: string;
  nickname: string;
  nbRounds: number;
  nbSelectas: number;
  nbRegistrations: number;
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
  registrations: number;
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


