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

export class Event {
  _id: string;
  title: string;
  admin: User;
  nbSelectas: number;
  selectas: Array<User>;
  nbRounds: number;
  rounds: Array<number>;
  status: string;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}

export class User {
  _id: string;
  nickname: string;
  email: string;
  encryptedPassword: string;
  role: string;
  cup: number;
  // avatar: string;
  events: Array<string>;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}



