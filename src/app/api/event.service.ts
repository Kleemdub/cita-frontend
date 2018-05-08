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
  admin: string;
  nbSelectas: number;
  selectas: Array<string>;
  nbRounds: number;
  rounds: Array<number>;
  status: string;
  createdAt?: Date; // '?' makes this property optional
  updatedAt?: Date;
}




