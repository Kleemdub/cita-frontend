import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';

@Injectable()
export class WatchitService {

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  // GET /api/watchit
  getWatchit() {
    return this.ajaxEngine
    .get(`${environment.backendUrl}/api/watchit`)
    .toPromise()
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



