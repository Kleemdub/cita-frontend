import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WatchitService {

  newsSubject = new Subject();

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  // GET /api/watchit
  getWatchit() {
    return this.ajaxEngine
    .get(`${environment.backendUrl}/api/watchit`)
    .toPromise()
  }

  updateNews() {
    this.newsSubject.next();
  }
}

export class WatchIt {
  _id: string;
  type: string;
  user: string;
  event: string;
  roundNumber: number;
  message: string;
  updated_at: Date;
  created_at: Date;
}



