import { Component, OnInit } from '@angular/core';
import { EventService, Event, User } from '../api/event.service';
import { UserService } from '../api/user.service';
import { GameService, Game } from '../api/game.service';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  events: Array<Event> = [];
  setNames: Array<String> = [];
  setHtml: Array<String> = [];
  // roundId: string;
  game: Game;
  like: number = 0;
  bullet: number = 0;
  bouse: number = 0;

  userGame: any = {
    userId: ""
  }

  constructor(
    public apiEvent: EventService,
    public userTruc: UserService,
    public apiGame: GameService
  ) { }

  ngOnInit() {

    this.userTruc.check()
    .then(() => {

      this.apiGame.checkGame(this.userTruc.currentUser._id)
      .then((result: Game) => {
        this.game = result;
        this.like = this.game.like;
        this.bullet = this.game.bullet;
        this.bouse = this.game.bouse;
        this.userGame.userId = this.userTruc.currentUser._id;
        console.log(this.game);
      })
      .catch((err) => {
        console.log('Game check error');
        console.log(err);
      });

    })
    .catch((err) => {
      console.log("App login check error");
      console.log(err);
    });

 
    this.apiEvent.getEventList()
    .then((result: Array<Event>) => {
      this.events = result;
      this.events.forEach((oneEvent) => {
        oneEvent.rounds.forEach((oneRound) => {
          if(oneRound.status == "displayed") {
            oneRound.sets.forEach((oneSet) => {
              this.setNames.push(oneSet.title);
              var newName = oneSet.title;
              newName = newName.toLowerCase();
              newName = newName.replace(/ /g, "-");
              var mixHtml = `<iframe class="mix-cloud-widget" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FChampionsInTheArena%2F${newName}%2F&amp;hide_cover=1&hide_artwork=1&amp;light=1" frameborder="0"></iframe>`;
              this.setHtml.push(mixHtml);
            });
          }
        });
      });
      // console.log(this.setHtml);
    })
    .catch((err) => {
      console.log('Event list error');
      console.log(err);
    });
  }

  likeClick(eventId, roundId, setId) {
    if(this.like > 0) {
      this.like--;
      this.apiGame.likePut(eventId, roundId, setId, this.userGame)
      .catch((err) => {
        console.log('Like error');
        console.log(err);
      });
    }
  }

  bulletClick(eventId, roundId, setId) {
    if(this.bullet > 0) {
      this.bullet--;
      this.apiGame.bulletPut(eventId, roundId, setId, this.userGame)
      .catch((err) => {
        console.log('Bullet error');
        console.log(err);
      });
    }
  }

  bouseClick(eventId, roundId, setId) {
    if(this.bouse > 0) {
      this.bouse--;
      this.apiGame.bousePut(eventId, roundId, setId, this.userGame)
      .catch((err) => {
        console.log('Bouse error');
        console.log(err);
      });
    }
  }

}

