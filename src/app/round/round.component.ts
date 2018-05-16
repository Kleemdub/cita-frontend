import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { EventService, Event, User, Selecta, Round } from '../api/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  event: Event;
  round: Round;
  eventId: string;
  roundId: string;
  roundWinner: string;
  scoresTotal: number = 0;
  scores: Array<Score> = [];
  setNames: Array<String> = [];
  setHtml: Array<String> = [];

  constructor(
    private reqTruc: ActivatedRoute,
    public userTruc: UserService,
    public apiEvent: EventService,
    private resTruc: Router
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
    .subscribe((myParams) => {
      this.eventId = myParams.get('eventId');
      this.roundId = myParams.get('roundId');
      this.fetchEventData();
    });
  }

  fetchEventData() {
    this.apiEvent.getRound(this.eventId, this.roundId)
    .then((result: Event) => {
      this.event = result;
      // console.log(this.event);
      this.event.rounds.forEach((oneRound, index) => {
        // console.log(index);
        if(oneRound._id == this.roundId) {
          // console.log(oneRound);
          if(index == 0) {
            this.roundWinner = this.event.winner1.nickname;
            console.log(this.roundWinner);
            this.event.scores1.forEach((item) => {
              this.scoresTotal += item.score;
              // var percentTemp = (item.score) / (this.scoresTotal) * 100;
              // console.log('percentTemp : ' + percentTemp);
              var scoreTemp = {
                selecta: item.selecta.nickname,
                selectaScore: item.score,
                percent: 0
              }
              this.scores.push(scoreTemp);
            });
            this.event.scores1.forEach((item, index) => {
              var percentTemp = (item.score) / (this.scoresTotal) * 100;
              console.log('percentTemp : ' + percentTemp);
              this.scores[index].percent = Math.round(percentTemp);
            });
            console.log(this.scores);
            console.log('scoresTotal : ' + this.scoresTotal);
          }
          else if(index == 1) {
            this.roundWinner = this.event.winner2.nickname;
            console.log(this.roundWinner);
            this.event.scores2.forEach((item) => {
              this.scoresTotal += item.score;
              var scoreTemp = {
                selecta: item.selecta.nickname,
                selectaScore: item.score,
                percent: 0
              }
              this.scores.push(scoreTemp);
            });
            this.event.scores2.forEach((item, index) => {
              var percentTemp = (item.score) / (this.scoresTotal) * 100;
              this.scores[index].percent = Math.round(percentTemp);
            });
            console.log(this.scores);
          }
          else if(index == 2) {
            this.roundWinner = this.event.winner3.nickname;
            console.log(this.roundWinner);
            this.event.scores3.forEach((item) => {
              this.scoresTotal += item.score;
              var scoreTemp = {
                selecta: item.selecta.nickname,
                selectaScore: item.score,
                percent: 0
              }
              this.scores.push(scoreTemp);
            });
            this.event.scores3.forEach((item, index) => {
              var percentTemp = (item.score) / (this.scoresTotal) * 100;
              this.scores[index].percent = Math.round(percentTemp);
            });
            console.log(this.scores);
          }

          oneRound.sets.forEach((oneSet) => {
            this.setNames.push(oneSet.title);
            var newName = oneSet.title;
            newName = newName.toLowerCase();
            newName = newName.replace(/ /g, "-");
            var mixHtml = `<iframe class="mix-cloud-widget" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FChampionsInTheArena%2F${newName}%2F&amp;hide_cover=1&hide_artwork=1&amp;light=1" frameborder="0"></iframe>`;
            this.setHtml.push(mixHtml);
          });
          console.log(this.setHtml);
        }
      });
    })
    .catch((err) => {
      console.log('Event list error');
      console.log(err);
    });
  }

}

class Score {
  selecta: string;
  selectaScore: number;
  percent: number;
}
