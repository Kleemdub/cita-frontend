import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';

@Injectable()
export class AdminService {

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  // GET /api/admins/:adminId/events
  getAdminEventList(adminId) {
    return this.ajaxEngine
    .get(`${environment.backendUrl}/api/admins/${adminId}/events`)
    .toPromise();
  }

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