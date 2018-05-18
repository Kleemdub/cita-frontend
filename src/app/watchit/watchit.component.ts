import { Component, OnInit } from '@angular/core';
import { WatchitService, WatchIt } from '../api/watchit.service';

@Component({
  selector: 'app-watchit',
  templateUrl: './watchit.component.html',
  styleUrls: ['./watchit.component.css']
})
export class WatchitComponent implements OnInit {

  watchits: Array<WatchIt> = [];

  constructor(
    public apiWatchit: WatchitService
  ) { }

  ngOnInit() {

    this.refreshNew();
    this.apiWatchit.newsSubject.subscribe(() => {
      this.refreshNew();
    });
  }

  refreshNew() {
    this.apiWatchit.getWatchit()
    .then((result: Array<WatchIt>) => {
      this.watchits = result;
      console.log(this.watchits);
    })
    .catch((err) => {
      console.log('Phone list error');
      console.log(err);
    });
  }
}
