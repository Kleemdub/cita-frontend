import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';

@Injectable()
export class GameService {

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  // GET /api/game/check/:userId
  checkGame(userId) {
    return this.ajaxEngine
    .get(`${environment.backendUrl}/api/game/check/${userId}`)
    .toPromise()
  }

  // PUT /api/game/like/:eventId/:roundId/:setId
  likePut(eventId, roundId, setId, userId) {
    return this.ajaxEngine
    .put(`${environment.backendUrl}/api/game/like/${eventId}/${roundId}/${setId}`, userId)
    .toPromise()
  }

  // PUT /api/game/bullet/:eventId/:roundId/:setId
  bulletPut(eventId, roundId, setId, userId) {
    return this.ajaxEngine
    .put(`${environment.backendUrl}/api/game/bullet/${eventId}/${roundId}/${setId}`, userId)
    .toPromise()
  }

  // PUT /api/game/bouse/:eventId/:roundId/:setId
  bousePut(eventId, roundId, setId, userId) {
    return this.ajaxEngine
    .put(`${environment.backendUrl}/api/game/bouse/${eventId}/${roundId}/${setId}`, userId)
    .toPromise()
  }

}

export class Game {
  _id: string;
  bullet: number;
  like: number;
  bouse: number;
  updated_at: Date;
  created_at: Date;
}
